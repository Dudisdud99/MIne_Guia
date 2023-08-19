// Função para carregar elementos a partir do JSON
async function loadElementsFromJson() {
  try {
    const response = await fetch('assets/json/nav.json');
    const data = await response.json();

    data.forEach(elementData => {
      const checkbox = document.getElementById(elementData.checkboxId);
      const element = elementData.elementId
        ? document.getElementById(elementData.elementId)
        : document.querySelector('.' + elementData.elementClass);
      const icon = document.querySelector('.' + elementData.iconClass + ' > img');
      const label = document.querySelector('.' + elementData.labelClass);

      element.classList.add(elementData.showClass);

      checkbox.addEventListener('change', () => {
        toggleElement(
          checkbox,
          element,
          icon,
          label,
          elementData.showClass,
          elementData.iconSrcShow,
          elementData.iconSrcHide
        );
      });
    });
  } catch (error) {
    console.error('Erro ao carregar elementos do JSON:', error);
  }
}

// Função para alternar a visibilidade dos elementos
function toggleElement(checkbox, element, icon, label, showClass, iconSrcShow, iconSrcHide) {
  if (checkbox.checked) {
    element.classList.remove(showClass);
    icon.src = iconSrcShow;
    label.classList.add('selecionado');
    label.style.background = 'red';
  } else {
    element.classList.add(showClass);
    icon.src = iconSrcHide;
    label.classList.remove('selecionado');
    label.style.background = 'white';
  }
}

// Chame a função para carregar os elementos do JSON quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', loadElementsFromJson);
