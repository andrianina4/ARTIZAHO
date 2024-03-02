import EditUser from "./editUser";

type props = {};

export default function ModalEditUser(props: props) {
  return (
    <dialog className="modal" id="updateProfile">
      <div className="modal-box bg-white w-[980px] max-w-[980px]">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-bronze">
            ✕
          </button>
        </form>

        <EditUser isModal={true} />
      </div>
      <div className="modal-backdrop bg-white bg-opacity-20"></div>
    </dialog>
  );
}
