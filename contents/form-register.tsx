import Button from '@/components/button'
import Checkbox from '@/components/checkbox'
import Input from '@/components/input'
import Select from '@/components/select'
import { ISelect } from '@/types/IField'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}
const choiceTypeOfMember: Array<ISelect> = [
    { label: 'Entreprise', value: 'Enterprise' },
    { label: 'Particulier', value: 'Particular' }]

function FormRegister({ }: Props) {
    const router = useRouter()

    function redirectTerms() {
        router.push('')
    }

    return (
        <form className='flex gap-x-5'>
            <div className='flex-1'>
                <Select values={choiceTypeOfMember} />
                <Input placeholder='Nom' />
                <Input type='email' placeholder='Adresse email' />
                <Input placeholder='Numéro de téléphone' />
                <Input type='password' placeholder='Mot de passe' />
                <div className='mt-24'></div>
                <Checkbox
                    content={
                        <>
                            <div className='flex gap-x-2'>
                                <span className='text-black-60%'>J&apos;accepte</span>
                                <button onClick={redirectTerms} className='text-sm font-extrabold text-bronze hover:text-opacity-70' type='button'>
                                    les termes et conditions
                                </button>
                            </div>
                        </>
                    }
                />
                <Button content='Créer votre compte' />
            </div>

            <div className='mt-16 w-1/2'>
                <Input placeholder='Nif Stat' />
                <Input placeholder='Localisation' />
                <Input placeholder='Numéro de compte' />
            </div>
        </form>
    )
}

export default FormRegister