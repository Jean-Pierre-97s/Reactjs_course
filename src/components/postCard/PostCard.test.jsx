/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { PostCard } from ".";

const props = {
  post: {
    title: "Title",
    body: "body",
    id: 1,
    cover: "img/img.png",
  },
};

describe("<PostCard />", () => {
  it("Should render the postCard correctly", () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole("img", { name: "Title" })).toHaveAttribute(
      "src",
      "img/img.png",
    );
    expect(
      screen.getByRole("heading", { name: "1 Title" }),
    ).toBeInTheDocument();
    expect(screen.getByText("body")).toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);

    expect(container).toMatchSnapshot();
  });
});
