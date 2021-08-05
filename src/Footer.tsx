
type Footer = {
    copyrightText : string;
}

const Footer = ({copyrightText}:Footer) =>{
    return (
        <p className='text-center text-gray-400'> {copyrightText} </p>
    )
}

export default Footer;