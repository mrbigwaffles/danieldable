class ExperienceCard extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title');
        const company = this.getAttribute('company');
        const period = this.getAttribute('period');
        const image = this.getAttribute('image');
        const achievements = JSON.parse(this.getAttribute('achievements'));
        const flipped = this.getAttribute('flipped') === 'true';
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin-bottom: 4rem;
                }
                .experience-card {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                    align-items: center;
                }
                .experience-image {
                    border-radius: 1rem;
                    overflow: hidden;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                }
                .experience-image img {
                    width: 100%;
                    height: auto;
                    display: block;
                    transition: transform 0.3s ease;
                }
                :host(:hover) .experience-image img {
                    transform: scale(1.05);
                }
                .experience-content {
                    padding: 1rem;
                }
                .experience-header {
                    margin-bottom: 1.5rem;
                }
                .experience-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    color: #1f2937;
                }
                .experience-company {
                    font-size: 1.1rem;
                    color: #3b82f6;
                    font-weight: 600;
                    margin-bottom: 0.25rem;
                }
                .experience-period {
                    font-size: 0.9rem;
                    color: #6b7280;
                }
                .experience-achievements {
                    list-style-type: none;
                    padding-left: 0;
                }
                .experience-achievements li {
                    margin-bottom: 0.75rem;
                    position: relative;
                    padding-left: 1.75rem;
                }
                .experience-achievements li::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0.5rem;
                    width: 0.5rem;
                    height: 0.5rem;
                    background-color: #3b82f6;
                    border-radius: 50%;
                }
                @media (max-width: 768px) {
                    .experience-card {
                        grid-template-columns: 1fr;
                    }
                    .experience-image {
                        order: -1;
                    }
                }
            </style>
            <div class="experience-card">
                <div class="experience-image ${flipped ? 'order-last' : ''}">
                    <img src="${image}" alt="${company}">
                </div>
                <div class="experience-content">
                    <div class="experience-header">
                        <h3 class="experience-title">${title}</h3>
                        <p class="experience-company">${company}</p>
                        <p class="experience-period">${period}</p>
                    </div>
                    <ul class="experience-achievements">
                        ${achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }
}

customElements.define('experience-card', ExperienceCard);