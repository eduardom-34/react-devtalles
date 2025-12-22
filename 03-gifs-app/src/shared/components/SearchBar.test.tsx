import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe('SearchBar', () => {

  test('should render SearchBar correctly', () => {

    const { container } = render(<SearchBar onQuery={() => { }} />)

    expect(container).toMatchSnapshot();
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();


  });

  test('should call onQuery witht the correct value after 700ms', async () => {

    const onQuery = vi.fn()

    render(<SearchBar onQuery={onQuery} />)

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { taget: { value: 'test' } });

    await waitFor(() => {
      expect(onQuery).toHaveBeenCalled();
      expect(onQuery).toHaveBeenCalledWith('test');
    });

  });


});