import { render, screen, waitFor } from "@testing-library/react";
import Index from "dh-marvel/pages/index.page";
import { QueryClient, QueryClientProvider } from "react-query";
import userEvent from "@testing-library/user-event";

const queryClient = new QueryClient();

describe("Index Page", () => {
  describe("when rendering default", () => {
    it("should render the informations",
      async () => {
        render(
          <QueryClientProvider client={queryClient}>
            <Index />
          </QueryClientProvider>
        );

        const title = screen.getByText(/Marvel Comics/i);        

        await waitFor(() => {
          expect(title).toBeInTheDocument()
        });
      });
  });
});