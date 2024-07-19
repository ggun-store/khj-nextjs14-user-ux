export default function Yesterday(){
    const date = new Date();
    date.setDate(date.getDate() - 1);
    const yyyy = date.getFullYear();
    const MM = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    
    return `${yyyy}${MM}${dd}`
}