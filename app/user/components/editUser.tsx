"use client";
import SelectCustom from "@/components/Select";
import Button from "@/components/button";
import Input from "@/components/input";
import { Madagascar } from "@/constants/link/icons";
import { ACCOUNT_TYPE, GENDER } from "@/constants/utils";
import { CreateUserDto } from "@/dto/user";
import { patchUser, uploadImage } from "@/services/user.service";
import { ICurrentUser } from "@/types/user/ICurrentUser";
import { IRequestToken } from "@/types/user/IRequestToken";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { SnackbarProvider, useSnackbar } from "notistack";
type PropsEditUser = {
  isModal?: boolean;
  currentUser?: ICurrentUser & IRequestToken;
};

type FormValue = CreateUserDto;

export default function EditUser(props: PropsEditUser) {
  const { enqueueSnackbar } = useSnackbar();
  const { isModal = false, currentUser } = props;
  const editMode = currentUser ? true : false;
  // const { data: session } = useSession();
  // const userConnected = session?.user as ICurrentUser & IRequestToken;
  const [file, setFile] = useState("");
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    username: Yup.string().nullable(),
    email: Yup.string().email().required(),
    account_type: Yup.string().required(),
    gender: Yup.string().required(),
    dob: Yup.string().required(),
    nif: Yup.string().nullable(),
    phone_number: Yup.string().nullable(),
    password: Yup.string().nullable(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValue>({
    resolver: yupResolver<FormValue>(validationSchema as any),
  });

  const mudationPatch = useMutation({
    mutationFn: (body: FormValue) => patchUser(body),
    onSuccess: (data) => {
      enqueueSnackbar("Update success");
    },
  });

  const onSubmit = async (body: FormValue) => {
    // if (editMode) mudationPatch.mutate(body);

    try {
      await patchUser(body);
      enqueueSnackbar("Update success", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    } catch (error) {
      enqueueSnackbar("Error", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  };

  useEffect(() => {
    if (editMode && currentUser) {
      setValue("account_type", currentUser.account_type);
      setValue("dob", currentUser.dob);
      setValue("email", currentUser.email);
      setValue("first_name", currentUser.first_name);
      setValue("last_name", currentUser.last_name);
      setValue("nif", currentUser.nif);
      setValue("phone_number", currentUser.phone_number);
      setValue("username", currentUser.username);
      // setValue("password", currentUser.password);
    }
  }, [editMode, currentUser, setValue]);

  return (
    <div>
      <h4 className="font-manrope font-bold text-2xl text-bronze leading-[32.78px]">
        {editMode ? "Edit your profile" : "Add profile"}
      </h4>

      <div className="mt-10 flex gap-4">
        <div className="flex flex-col justify-center items-center w-[162px]  ">
          <label className="cursor-pointer block" htmlFor="uploadImage">
            {file ? (
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-brown ring-offset-base-100 ring-offset-2">
                  <Image src={file} alt="profile" width={153} height={153} />
                </div>
              </div>
            ) : (
              <svg
                width="168"
                height="178"
                viewBox="0 0 168 178"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="83"
                  cy="83"
                  r="82"
                  stroke="#ECA853"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-dasharray="15 15"
                />
                <path
                  d="M160 83.5C160 104.125 151.837 122.847 138.566 136.603C124.653 151.028 105.127 160 83.5019 160C61.8768 160 42.3433 151.028 28.4373 136.599C15.1614 122.843 7 104.122 7 83.5C7 41.2491 41.252 7 83.5019 7C125.752 7.00186 160 41.251 160 83.5Z"
                  fill="#DFE0E1"
                />
                <path
                  d="M109.92 61.801L109.909 61.8122C108.44 63.2978 107.863 65.4497 108.393 67.4709L108.395 67.4784C109.218 70.6157 107.359 73.8314 104.23 74.6844C102.208 75.2349 100.629 76.8138 100.079 78.8351C99.226 81.965 96.0103 83.8238 92.8729 83.0008L92.8673 82.9989C90.8461 82.4689 88.6942 83.0437 87.2086 84.5144L87.1974 84.5256C84.8924 86.8044 81.1859 86.8044 78.881 84.5256L78.8698 84.5144C77.3841 83.0456 75.2323 82.4689 73.211 82.9989L73.2035 83.0008C70.0662 83.8238 66.8505 81.965 65.9976 78.8351C65.447 76.8138 63.8681 75.2349 61.8468 74.6844C58.717 73.8314 56.8581 70.6157 57.6812 67.4784L57.683 67.4728C58.2131 65.4516 57.6382 63.2997 56.1676 61.814L56.1564 61.8029C53.8776 59.4998 53.8776 55.7914 56.1564 53.4864L56.1676 53.4752C57.6364 51.9896 58.2131 49.8377 57.683 47.8165L57.6812 47.809C56.8581 44.6717 58.717 41.456 61.8468 40.6031C63.8681 40.0525 65.447 38.4736 65.9976 36.4523C66.8505 33.3225 70.0662 31.4636 73.2035 32.2866L73.2091 32.2885C75.2304 32.8185 77.3823 32.2437 78.8679 30.773L78.8791 30.7618C81.1822 28.483 84.8906 28.483 87.1955 30.7618L87.2067 30.773C88.6923 32.2418 90.8442 32.8185 92.8655 32.2885L92.8729 32.2866C96.0103 31.4636 99.226 33.3225 100.079 36.4523C100.629 38.4736 102.208 40.0525 104.23 40.6031C107.359 41.456 109.218 44.6717 108.395 47.809L108.393 47.8146C107.863 49.8359 108.438 51.9878 109.909 53.4734L109.92 53.4846C112.199 55.7895 112.199 59.4979 109.92 61.801Z"
                  fill="#535B5F"
                />
                <path
                  d="M94.7677 96.0988C93.0693 103.562 88.4669 108.917 83.0545 108.917C77.6365 108.917 73.0285 103.551 71.332 96.0802L72.6385 91.0112L73.0304 89.4957H93.0637L94.5549 95.2889L94.6912 95.8077L94.7677 96.0988Z"
                  fill="#D3D6DC"
                />
                <path
                  d="M108.258 67.6949C118.233 56.5025 111.578 83.8649 106.059 80.666C96.3599 75.0446 108.258 67.6949 108.258 67.6949Z"
                  fill="#F5F4F4"
                />
                <path
                  d="M138.329 136.904C133.144 142.272 127.187 146.887 120.64 150.577C115.599 153.416 110.201 155.695 104.544 157.346C98.8576 158.998 92.9096 160.012 86.7581 160.301C85.532 160.368 84.2964 160.398 83.0497 160.398C76.8609 160.398 70.8457 159.664 65.0806 158.283C64.25 158.08 63.4195 157.878 62.5983 157.636C55.4913 155.685 48.8098 152.74 42.6882 148.946C37.2142 145.557 32.2124 141.511 27.7705 136.906L29.0937 131.692C31.0926 123.861 37.2627 117.778 45.1312 115.895L46.0009 115.692L55.6462 113.385L58.2815 112.758C59.392 112.487 60.4539 112.11 61.458 111.628C61.8443 111.446 62.2307 111.233 62.5965 111.02C63.0313 110.768 63.4457 110.499 63.8525 110.208C64.6644 109.63 65.4258 108.973 66.1127 108.249C67.9566 106.308 69.319 103.913 70.0133 101.22L71.0361 97.2427L71.3067 96.1714L71.3254 96.0837L72.6393 91.0147L73.0256 89.4993H93.0608L94.5576 95.2924L94.692 95.8131L94.7685 96.1024L94.7778 96.1696L95.0578 97.2502L96.0805 101.218C97.0361 104.906 99.2477 108.064 102.251 110.208C102.965 110.729 103.738 111.194 104.539 111.58C105.573 112.091 106.663 112.487 107.812 112.758L110.246 113.336L120.964 115.895C128.833 117.778 135.003 123.861 137.002 131.692L138.329 136.904Z"
                  fill="#F5F4F4"
                />
                <path
                  d="M94.7677 96.0988C93.0693 103.562 88.4669 108.917 83.0545 108.917C77.6365 108.917 73.0285 103.551 71.332 96.0802L72.6385 91.0112L73.0304 89.4957H93.0637L94.5549 95.2889L94.6912 95.8077L94.7677 96.0988Z"
                  fill="#D3D6DC"
                />
                <path
                  d="M57.8504 67.6949C47.8747 56.5025 54.5301 83.8649 60.0489 80.666C69.7483 75.0446 57.8504 67.6949 57.8504 67.6949Z"
                  fill="#F5F4F4"
                />
                <path
                  d="M106.261 59.6285C106.261 60.4777 106.213 61.3082 106.116 62.1388C106.077 62.555 105.952 63.7419 105.748 65.4123C105.584 66.7449 105.371 68.3854 105.101 70.2014L105.091 70.2107C104.763 72.4802 104.337 75.0184 103.835 77.5678C103.826 77.5977 103.826 77.635 103.817 77.6649C102.59 83.8742 100.862 90.0536 98.602 92.3026C96.0526 94.852 94.0052 97.17 91.6685 98.8404C89.3319 100.52 86.7153 101.563 83.046 101.563C79.3768 101.563 76.7602 100.52 74.4235 98.8404C72.0962 97.17 70.0395 94.852 67.4901 92.3026C65.2299 90.0425 63.5017 83.8537 62.2662 77.6555V77.6462C62.2568 77.6369 62.2568 77.6275 62.2568 77.6163C62.1019 76.8157 61.9582 76.0131 61.8127 75.2218C61.7548 74.8933 61.6969 74.5649 61.6391 74.2364C61.3983 72.846 61.1856 71.4854 60.9915 70.2107C60.2953 65.5075 59.9575 61.9652 59.9575 61.9652C59.881 61.2018 59.8418 60.4199 59.8418 59.6285C59.8418 59.4251 59.8418 59.2235 59.8511 59.0201C59.8997 57.1948 60.1497 55.4181 60.6051 53.7197C60.6238 53.6432 60.6443 53.5648 60.663 53.4883C63.2404 44.0632 71.6128 37.0252 81.7116 36.4653C82.1558 36.4373 82.5906 36.4261 83.0442 36.4261C89.4551 36.4261 95.2594 39.0241 99.4586 43.2234C103.089 46.8441 105.522 51.6723 106.112 57.0511C106.213 57.9003 106.261 58.7588 106.261 59.6285Z"
                  fill="#F5F4F4"
                />
                <path
                  d="M106.935 59.8116C106.935 60.6851 106.885 61.5399 106.786 62.3946C106.747 62.822 106.618 64.0445 106.409 65.7634C106.241 67.1352 105.105 70.2016 105.105 70.2016C102.023 70.2016 100.586 68.2027 100.586 65.1232V59.4141C100.586 56.2973 98.0591 53.7703 94.9423 53.7703H71.1669C68.0502 53.7703 65.5231 56.2973 65.5231 59.4141V65.5544C65.5231 68.3968 63.8378 70.2109 60.9954 70.2109L59.2933 62.2155C59.213 61.4298 59.1738 60.6254 59.1738 59.8116C59.1738 59.6026 59.1738 59.3936 59.1832 59.1864C59.2335 57.3089 59.4911 55.4798 59.9577 53.7311C59.9782 53.6508 59.9969 53.5724 60.0174 53.4922C62.6695 43.7947 71.2845 36.5514 81.6763 35.9766C82.1336 35.9467 82.5796 35.9374 83.0481 35.9374C89.6456 35.9374 95.616 38.61 99.9385 42.9324C103.675 46.6577 106.178 51.6259 106.784 57.1596C106.885 58.033 106.935 58.9177 106.935 59.8116Z"
                  fill="#535B5F"
                />
                <path
                  d="M86.6981 80.4961C86.6981 82.0974 85.067 83.3945 83.0476 83.3945C81.0394 83.3945 79.4082 82.0974 79.4082 80.4961C79.4082 80.3039 79.4269 80.1116 79.4847 79.9343C79.8039 81.265 81.2801 82.271 83.0476 82.271C84.8243 82.271 86.3025 81.265 86.6198 79.9343C86.6795 80.1135 86.6981 80.3057 86.6981 80.4961Z"
                  fill="#DFE0E1"
                />
                <path
                  d="M138.318 136.916C133.423 141.985 127.842 146.388 121.719 149.962C110.364 156.595 97.1447 160.4 83.037 160.4C68.8808 160.4 55.6148 156.567 44.2302 149.885C38.1477 146.322 32.614 141.947 27.7578 136.908L29.081 131.703C31.0799 123.863 37.25 117.78 45.1185 115.897L47.136 115.414L55.6522 113.387L57.7369 112.885L58.2688 112.76C59.4464 112.48 60.5868 112.065 61.6487 111.534C66.9977 117.23 74.5974 120.793 83.037 120.793C91.4766 120.793 99.0745 117.23 104.425 111.534C105.487 112.054 106.616 112.48 107.805 112.76L108.231 112.866L110.095 113.31L118.833 115.397L120.957 115.899C128.828 117.782 134.996 123.865 136.986 131.705L138.318 136.916Z"
                  fill="#D3D6DC"
                />
                <path
                  d="M72.0059 83.5214C67.3513 83.5214 63.5645 79.7346 63.5645 75.0799C63.5645 70.4252 67.3513 66.6384 72.0059 66.6384C76.6606 66.6384 80.4474 70.4252 80.4474 75.0799C80.4474 79.7346 76.6606 83.5214 72.0059 83.5214ZM72.0059 67.6033C67.8832 67.6033 64.5293 70.9571 64.5293 75.0799C64.5293 79.2026 67.8832 82.5565 72.0059 82.5565C76.1287 82.5565 79.4825 79.2026 79.4825 75.0799C79.4825 70.9571 76.1287 67.6033 72.0059 67.6033Z"
                  fill="#D3D6DC"
                />
                <path
                  d="M94.1046 83.5214C89.4499 83.5214 85.6631 79.7346 85.6631 75.0799C85.6631 70.4252 89.4499 66.6384 94.1046 66.6384C98.7592 66.6384 102.546 70.4252 102.546 75.0799C102.546 79.7346 98.7592 83.5214 94.1046 83.5214ZM94.1046 67.6033C89.9818 67.6033 86.628 70.9571 86.628 75.0799C86.628 79.2026 89.9818 82.5565 94.1046 82.5565C98.2273 82.5565 101.581 79.2026 101.581 75.0799C101.581 70.9571 98.2273 67.6033 94.1046 67.6033Z"
                  fill="#D3D6DC"
                />
                <path
                  d="M86.6258 75.0799H85.6609C85.6609 73.6428 84.4907 72.4726 83.0536 72.4726C81.6165 72.4726 80.4463 73.6428 80.4463 75.0799H79.4814C79.4814 73.109 81.0846 71.5077 83.0536 71.5077C85.0245 71.5077 86.6258 73.109 86.6258 75.0799Z"
                  fill="#D3D6DC"
                />
                <path
                  d="M62.5983 111.017V157.634C55.4913 155.684 48.8098 152.739 42.6882 148.944C37.2142 145.555 32.2124 141.509 27.7705 136.905L29.0937 131.69C31.0926 123.859 37.2627 117.776 45.1312 115.893L46.0009 115.69L55.6462 113.383L58.2815 112.756C59.392 112.485 60.4539 112.108 61.458 111.627C61.8462 111.442 62.2307 111.229 62.5983 111.017Z"
                  fill="#6E7275"
                />
                <path
                  d="M138.329 136.905C133.145 142.272 127.187 146.888 120.64 150.578C115.599 153.416 110.202 155.695 104.545 157.347V111.577C105.579 112.088 106.669 112.484 107.818 112.754L110.252 113.333L120.971 115.892C128.839 117.775 135.009 123.857 137.008 131.688L138.329 136.905Z"
                  fill="#6E7275"
                />
                <g filter="url(#filter0_d_554_1278)">
                  <rect
                    x="125"
                    y="131"
                    width="24"
                    height="24"
                    rx="12"
                    fill="#ECA853"
                  />
                  <path
                    d="M138.5 141H138.505M137.25 147.5H134C133.602 147.5 133.221 147.342 132.939 147.061C132.658 146.779 132.5 146.398 132.5 146V140C132.5 139.602 132.658 139.221 132.939 138.939C133.221 138.658 133.602 138.5 134 138.5H140C140.398 138.5 140.779 138.658 141.061 138.939C141.342 139.221 141.5 139.602 141.5 140V143.25"
                    stroke="#FFFEFD"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M132.5 145L135 142.5C135.464 142.054 136.036 142.054 136.5 142.5L138.5 144.5"
                    stroke="#FFFEFD"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M138 144L138.5 143.5C138.835 143.178 139.225 143.088 139.591 143.23M139 146.5H142M140.5 145V148"
                    stroke="#FFFEFD"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_554_1278"
                    x="106.4"
                    y="116.4"
                    width="61.2"
                    height="61.2"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="9.3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_554_1278"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_554_1278"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            )}

            <input
              className="hidden w-full text-sm text-gray-900 rounded-lg cursor-pointer bg-gray-50  focus:outline-0  "
              id="uploadImage"
              type="file"
              accept="image/*"
              onChange={(e) => {
                uploadImage();
                if (e.target.files) {
                  setFile(
                    URL.createObjectURL(
                      e.target.files[e.target.files.length - 1]
                    )
                  );
                }
              }}
            />
          </label>
          {editMode && (
            <>
              <h6 className="font-bold text-base text-center">
                {currentUser?.first_name} {currentUser?.last_name}
              </h6>
              <span className="text-sm text-grey-60%">{currentUser?.id}</span>
            </>
          )}
        </div>
        <div className=" w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-[16px] mt-4">
              <div className=" w-1/2">
                <Input
                  placeholder="Lastname"
                  className="border-none "
                  register={register("last_name")}
                  errorMessage={errors.last_name}
                />
              </div>
              <div className=" w-1/2">
                <Input
                  placeholder="Firstname"
                  className="border-none "
                  register={register("first_name")}
                  errorMessage={errors.first_name}
                />
              </div>
            </div>
            <div className="flex gap-[16px] items-center mt-4">
              <div className=" w-1/2">
                <Input
                  placeholder="Birthday"
                  className="border-none"
                  type="date"
                  register={register("dob")}
                  errorMessage={errors.first_name}
                />
              </div>
              <div className="w-1/2">
                <SelectCustom
                  options={GENDER}
                  register={register("gender")}
                  errorMessage={errors.gender}
                />
              </div>
            </div>
            <div className="flex gap-[16px] mt-4">
              <div className=" w-1/2">
                <Input
                  placeholder="Email"
                  className="border-none "
                  register={register("email")}
                  errorMessage={errors.email}
                />
              </div>
              <div className=" w-1/2">
                <Input
                  placeholder="Phone number"
                  className="border-none "
                  leftIcon={<Madagascar />}
                  register={register("phone_number")}
                  errorMessage={errors.phone_number}
                />
              </div>
            </div>

            <div className="flex gap-[16px] mt-4">
              <div className=" w-1/2">
                <Input
                  placeholder="Username"
                  className="border-none "
                  register={register("username")}
                  errorMessage={errors.username}
                />
              </div>
              <div className=" w-1/2">
                <Input
                  placeholder="Password"
                  className="border-none "
                  type="password"
                  register={register("password")}
                  errorMessage={errors.password}
                />
              </div>
            </div>
            <div className="flex gap-[16px] mt-4">
              <div className=" w-1/2">
                <SelectCustom
                  options={ACCOUNT_TYPE}
                  register={register("account_type")}
                  errorMessage={errors.account_type}
                />
              </div>
              <div className=" w-1/2">
                <Input
                  placeholder="NIF"
                  className="border-none "
                  {...register("nif")}
                  errorMessage={errors.nif}
                />
              </div>
            </div>
            <div className="flex gap-4 justify-end mt-4">
              <div>
                <Button content="Save" type="submit" />
              </div>

              {isModal ? (
                <>
                  <form method="dialog">
                    <button className="btn">Cancel</button>
                  </form>
                </>
              ) : (
                <>
                  <div>
                    <Button
                      content="Cancel"
                      className="text-[#ECA853] bg-white"
                    />
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}