
// // document.addEventListener("DOMContentLoaded", () => {
// //     const movies = [
// //         { title: "O Poderoso Chefão", rating: 4.8 },
// //         { title: "Interestelar", rating: 4.6 },
// //         { title: "Clube da Luta", rating: 4.7 },
// //         { title: "Pulp Fiction", rating: 4.5 }
// //     ];

// //     const movieList = document.getElementById("movie-list");

// //     movies.forEach(movie => {
// //         const movieItem = document.createElement("div");
// //         movieItem.classList.add("movie-item");
// //         movieItem.innerHTML = `
// //             <h4>${movie.title}</h4>
// //             <p>Nota: ${movie.rating}</p>
// //         `;
// //         movieList.appendChild(movieItem);
// //     });

//     window.scrollToSection = (sectionId) => {
//         const section = document.getElementById(sectionId);
//         if (section) {
//             section.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     const contactForm = document.getElementById("contact-form");
//     contactForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const nome = document.getElementById("nome").value;
//         const email = document.getElementById("email").value;
//         const mensagem = document.getElementById("mensagem").value;

//         alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
//         contactForm.reset();
//     });
// // });
