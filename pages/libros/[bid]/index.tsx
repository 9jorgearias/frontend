import Link from "next/link";

export async function getStaticProps(){
    
      
    return {
          props: {
              book: data
          }
      }
  }

  export async function getStaticPaths(){
    const res = await fetch('http://localhost:8000/api/books')
    const data = await res.json()

    return {
        paths: data.map(book => {
            return {params: {bid: String(book.id)}}
        }),
        fallback: false
    }
  }

const BookDetail = ({ book }) => {
    return (
    <>
        <h1>{book.title}</h1>

         <Link href="/libros">Book List</Link>

    </>
        
           );

};
export default BookDetail;
