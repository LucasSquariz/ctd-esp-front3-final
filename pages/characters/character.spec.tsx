import { render, screen, waitFor } from "@testing-library/react";
import CharacterDetail from "./[id].page";
import character from "dh-marvel/test/mocks/character.json"

describe("CharacterDetails", () => {
    describe("when rendering default", () => {
        it("should render the title",
            async () => {
                render(
                    <CharacterDetail data={character} />
                );

                const title = screen.getByText(/Apocalypse/i);
                const description = screen.getByText(/Apocalypse/i);

                await waitFor(() => {
                    expect(title).toBeInTheDocument()
                });
                await waitFor(() => {
                    expect(description).toBeInTheDocument()
                });
            });
    });
});