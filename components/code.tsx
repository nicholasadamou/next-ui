import { CopyButton } from "./copy-button"
import {highlight} from "@/lib/shiki";
import {Lang} from "shiki";

type CodeProps = {
	code: string
	lang: Lang
}


export const Code = async ({ code, lang }: CodeProps) => {
	const component = await highlight(code, "github-dark", lang)

	return (
		<div
			className="relative overflow-auto"
			style={{ maxWidth: "100%", position: "relative" }}
		>
			<CopyButton className="absolute right-2 top-2" copyToClipboard={code} />
			<div
				className="p-4"
				style={{ whiteSpace: "pre", overflowX: "auto" }}
				dangerouslySetInnerHTML={{ __html: component }}
			/>
		</div>
	)
}
