"use client";

import { SessionInterface } from "@/common.types";
import Image from "next/image";
import { ChangeEvent } from "react";

type Props = {
    type: string,
    session: SessionInterface,
}

const ProjectForm = ({ type, session }: Props) => {

    const handleFormSubmit = (e: React.FormEvent) => {};
    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {};

    const form = {
        image: ''
    };

  return (
    <form
        onSubmit={handleFormSubmit}
        className="flexStart form"
    >
        <div className="flexStart from_image-container">
            <label htmlFor="poster" className="flexCenter form_image-label">
                {!form.image && 'Choose a poster for your Project'}
            </label>
            <input 
                id="image"
                type="file"
                accept="image/*"
                required={type === 'create'}
                className="form_image-input"
                onChange={handleChangeImage}
            /> 
            {form.image && (
                <Image
                    src={form?.image}
                    className="sm:p-10 object-contain z-20" 
                    alt="Project poster"
                    fill
                />
            )}
        </div>
    </form>
  )
}

export default ProjectForm;