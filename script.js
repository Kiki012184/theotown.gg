document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const itemList = document.getElementById('itemList');

            data.forEach(item => {
                const card = `
                    <div class="col-6 col-md-4 col-lg-3">
                      <div class="container-fluid content-bento">
                        <h6>${item.name} <i class="bi bi-${item.icons}"></i></h6>
                        <a href="${item.link}" class="btn w-100">Join Server</a>
                      </div>
                    </div>
                `;
                itemList.innerHTML += card;
            });
        })
        .catch(error => console.error('Error:', error));
});