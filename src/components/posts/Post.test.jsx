/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { Posts } from ".";

const props = {
  posts: [
    {
      title: "Title 1",
      body: "body 1",
      id: 1,
      cover: "img/img1.png",
    },
    {
      title: "Title 2",
      body: "body 2",
      id: 2,
      cover: "img/img2.png",
    },
    {
      title: "Title 3",
      body: "body 3",
      id: 3,
      cover: "img/img3.png",
    },
  ],
};

describe("<Posts />", () => {
  it("Should render the posts", () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole("heading", { name: /Title/i })).toHaveLength(3);
    expect(screen.getAllByRole("img", { name: /Title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
  });

  it("Should match snapshot", () => {
    const { container } = render(<Posts {...props} />);

    expect(container).toMatchSnapshot();
  });

  it("Should not render posts", () => {
    render(<Posts />);

    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });
});
