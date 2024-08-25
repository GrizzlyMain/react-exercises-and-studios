export default function BookList() {
   let pageTitle = "Bro Books";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/d/df/Blood_Meridian_Cormac_McCarthy_book_cover.png";
   let book2 = "https://m.media-amazon.com/images/I/91MBNyp411L._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://cdn11.bigcommerce.com/s-q39b4/images/stencil/2000x2000/products/7431/223400/9780804830805.website__94202.1567110692.jpg?c=2";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Blood Meridian" width="100" height="100" />
         <img src={book2} alt="Fight Club" width="100" height="100"/>
         <img src={book3} alt="The Art of War" width="100" height="100" />
      </div>      
   );
}