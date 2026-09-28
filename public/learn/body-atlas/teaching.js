import * as THREE from 'three';

// Owns teaching annotations; atlas navigation remains in viewer.js.
export class TeachingOverlay {
  constructor(stage, camera, bodySize, notify) {
    this.stage = stage; this.camera = camera; this.bodySize = bodySize; this.notify = notify;
    this.regions = []; this.buttons = []; this.state = null;
  }
  configure(state) {
    const signature = JSON.stringify(state.regions);
    this.state = state;
    if (signature !== this.signature) {
      this.signature = signature;
      this.buttons.forEach(button => button.remove());
      this.regions = state.regions.map(region => ({ ...region, expression: new RegExp(region.match, 'i') }));
      this.buttons = this.regions.map((region, index) => {
        const button = document.createElement('button');
        button.type = 'button'; button.className = `teaching-pin teaching-pin--${region.side}`;
        const number = document.createElement('i'); number.textContent = String(index + 1).padStart(2, '0');
        const label = document.createElement('span'); label.textContent = region.name;
        button.append(number, label);
        button.addEventListener('click', () => this.notify('region', { id: region.id }));
        this.stage.appendChild(button);
        return button;
      });
    }
    document.body.classList.add('is-teaching');
    this.buttons.forEach((button, index) => {
      const region = this.regions[index];
      const active = state.activeId === region.id;
      button.setAttribute('aria-pressed', String(active));
      button.setAttribute('aria-label', `Explore ${region.name}`);
      button.classList.toggle('is-context', state.contextRegions?.includes(region.id));
      button.style.setProperty('--pin-color', !state.withDrug ? '#9eaba8' : state.contextRegions?.includes(region.id) ? '#e29a88' : region.kind === 'benefit' ? '#8fcfc1' : region.kind === 'risk' ? '#e29a88' : '#deb985');
    });
  }
  regionFor(object) {
    if (!this.state) return null;
    return this.regions.find(region => !region.proxy && object.userData.atlasLayer === region.layer && region.expression.test(object.userData.atlasName));
  }
  update() {
    if (!this.state) return;
    this.buttons.forEach((button, index) => {
      const point = new THREE.Vector3(...this.regions[index].position).multiplyScalar(this.bodySize.y).project(this.camera);
      const x = (point.x + 1) / 2 * this.stage.clientWidth;
      const y = (1 - point.y) / 2 * this.stage.clientHeight;
      button.style.left = `${x}px`; button.style.top = `${y}px`;
      button.hidden = point.z > 1 || point.z < -1 || x < 10 || x > this.stage.clientWidth - 10 || y < 15 || y > this.stage.clientHeight - 15;
    });
  }
}
