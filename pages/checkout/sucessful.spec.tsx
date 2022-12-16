import { render, screen, waitFor } from "@testing-library/react";
import { CheckoutProvider } from "context/Provider";
import SuccessFullOrder from "./sucessfulorder.page";

describe("SuccessFullOrder", () => {
    describe("when rendering default", () => {
        it("should render the title",
            async () => {
                render(
                    <CheckoutProvider>
                        <SuccessFullOrder />
                    </CheckoutProvider>
                );
                const title = screen.getByText(/Aproveite suas compras!/i);
                await waitFor(() => {
                    expect(title).toBeInTheDocument()
                });
            });
    });
});