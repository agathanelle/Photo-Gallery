export default function Error({ text }: { text?: string }) {
	return <div className="error-text">{text}</div>;
}
