import { useSession } from "next-auth/react";
import EditUser from "./editUser";
import { ICurrentUser } from "@/types/user/ICurrentUser";
import { IRequestToken } from "@/types/user/IRequestToken";

type props = {
  userConnected?: ICurrentUser;
};

export default function ModalEditUser({ userConnected }: props) {
  // const { data: session } = useSession();
  // const userConnected = session?.user as ICurrentUser & IRequestToken;
  return (
    <dialog className="modal" id="updateProfile">
      <div className="modal-box bg-white w-[980px] max-w-[980px]">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-bronze">
            ✕
          </button>
        </form>

        <EditUser isModal={true} currentUser={userConnected} />
      </div>
      <div className="modal-backdrop bg-white bg-opacity-20"></div>
    </dialog>
  );
}
