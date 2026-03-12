import { GetServerSideProps } from "next"
import Cookies from 'cookies'
import jwt from 'jsonwebtoken'

interface IUsuario {
    data: any
}

const SECRET_KEY = 'SENHA_MUITO_FORTE'
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const cookies = new Cookies(req, res)
    const token = cookies.get('auth_token')

    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    try {
        const decodedToken = jwt.verify(token, SECRET_KEY)

        return {
            props: {
                data: decodedToken.name
            }
        }
    } catch (error) {
        return {
            props: {
                data: {}
            }
        }
    }
}

export default function Usuario({ data }: IUsuario) {
    console.log('data', data)
    return (
        <>
            <h1>Bem-vindo , {data} !</h1>
        </>
    )
}