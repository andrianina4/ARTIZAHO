import React, {ReactNode} from "react";

type ModalProps = {
	children: ReactNode;
	open: boolean;
	onClick: VoidFunction;
	className?: string;
};

function ModalLayout(props: ModalProps) {
	const {children, open, onClick, className} = props;
	const modalclass = ` modal modal-middle  sm:modal-middle ${open ? "modal-open" : ""}`;
	return (
		<div className={modalclass}>
			<div className={`bg-white rounded-3xl p-10 flex flex-row relative ${className}`}>
				<button
					className="btn btn-sm btn-square btn-ghost bg-bronze text-white absolute right-4 top-4"
					onClick={onClick}>
					✕
				</button>
				{children}
			</div>
		</div>
	);
}

export default ModalLayout;
