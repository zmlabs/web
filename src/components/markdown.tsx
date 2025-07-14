import markdownit from "markdown-it";

const md = markdownit();

interface MarkdownProps {
  text: string;
}

export default function Markdown(props: MarkdownProps) {
  const { text } = props;

  return (
    <article
      dangerouslySetInnerHTML={{ __html: md.render(text) }}
      // eslint-disable-next-line better-tailwindcss/no-unregistered-classes
      className="markdown-body prose"
    />
  );
}
