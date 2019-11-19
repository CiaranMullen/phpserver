ReactDOM.render(
    React.createElement(
        "h1",
        {
            "style":{"color":"yellow"}
        }, 
        "Hello World"
    ),
    document.getElementById("root")
);



document.addEventListener('DOMContentLoaded', fetchProducts);

function fetchProducts()
{
    fetch('db-connect.php')
      .then( res => res.json() )
      .then(json => {
          document
            .querySelector('#productsContainer')
            .innerHTML = json.map(product => `
               <li>${product.name}: ${product.price}</li>
               `).join('')

      });
}
