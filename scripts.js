document.addEventListener('DOMContentLoaded', function() {
  const quantities = document.querySelectorAll('.item-quantity');
  const totalPriceElement = document.getElementById('total-price');

  function calculateTotal() {
      let total = 0;
      quantities.forEach(quantity => {
          const price = parseFloat(quantity.getAttribute('data-price'));
          const quantityValue = parseInt(quantity.value);
          total += price * quantityValue;
      });
      totalPriceElement.textContent = total.toFixed(2);
  }

  quantities.forEach(quantity => {
      quantity.addEventListener('change', calculateTotal);
  });

  calculateTotal();
});
