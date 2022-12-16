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

                const title = screen.getByText(/Storm/i);
                const description = screen.getByText(/Ororo Monroe is the descendant of an ancient line of African priestesses, all of whom have white hair, blue eyes, and the potential to wield magic./i);

                await waitFor(() => {
                    expect(title).toBeInTheDocument()
                });
                await waitFor(() => {
                    expect(description).toBeInTheDocument()
                });
            });
    });
});