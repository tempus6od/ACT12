Vue.component('chuck-card', {
    props: ['icon_url', 'value'],
    template: `
      <div class="card h-100 shadow">
        <img :src="icon_url" class="card-img-top" alt="Chuck Norris">
        <div class="card-body">
          <p class="card-text">{{ value }}</p>
        </div>
      </div>
    `
  });
  