const list = document.querySelector("#unit-list");
const search = document.querySelector("#unit-search");
const confirmButton = document.querySelector("#confirm-unit");
const selectionMessage = document.querySelector("#selection-message");

let selectedUnit = null;

function renderUnits(filter = "") {
  const term = filter.trim().toLowerCase();

  const filtered = units.filter(unit =>
    unit.nome.toLowerCase().includes(term) ||
    unit.endereco.toLowerCase().includes(term)
  );

  if (!filtered.length) {
    list.innerHTML = `<div class="empty-state">
      <strong>Nenhuma unidade encontrada.</strong>
      <span>Tente outro termo de busca.</span>
    </div>`;
    return;
  }

  list.innerHTML = filtered.map(unit => `
    <button class="unit-card ${selectedUnit?.id === unit.id ? "selected" : ""}"
            data-unit-id="${unit.id}">
      <span class="unit-icon" aria-hidden="true">📍</span>
      <span class="unit-info">
        <strong>${unit.nome}</strong>
        <small>${unit.endereco} • ${unit.horario}</small>
      </span>
      <span class="unit-radio" aria-hidden="true">${selectedUnit?.id === unit.id ? "●" : "○"}</span>
    </button>
  `).join("");

  document.querySelectorAll(".unit-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = Number(card.dataset.unitId);
      selectedUnit = units.find(unit => unit.id === id);

      selectionMessage.textContent = `${selectedUnit.nome} selecionada.`;
      confirmButton.disabled = false;
      renderUnits(search.value);
    });
  });
}

search.addEventListener("input", event => renderUnits(event.target.value));

confirmButton.addEventListener("click", () => {
  if (!selectedUnit) return;

  localStorage.setItem("selectedUnit", JSON.stringify(selectedUnit));
  window.location.href = "cardapio.html";
});

renderUnits();
