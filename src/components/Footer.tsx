import { GithubIcon } from "./Icons/Icons"

export default function Footer() {
  return (
    <footer className='absolute bottom-2 w-screen flex justify-center'>
        <span className="font-semibold">Juan David</span>
        <a className="ml-2" href="https://github.com/JuanGuerrero09/"><GithubIcon/></a>
    </footer>
  )
}
