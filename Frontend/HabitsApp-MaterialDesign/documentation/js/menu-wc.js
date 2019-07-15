'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">habits-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-852d86b40da834d5de4b8894a0ab6a49"' : 'data-target="#xs-components-links-module-AppModule-852d86b40da834d5de4b8894a0ab6a49"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-852d86b40da834d5de4b8894a0ab6a49"' :
                                            'id="xs-components-links-module-AppModule-852d86b40da834d5de4b8894a0ab6a49"' }>
                                            <li class="link">
                                                <a href="components/AddOrUpdateHabitsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddOrUpdateHabitsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Dialogaddhabits.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Dialogaddhabits</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Dialogaddprogresshabits.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Dialogaddprogresshabits</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GridCategoryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridCategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GridHabitsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridHabitsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GridProgressComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridProgressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HabitsProgressComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HabitsProgressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-852d86b40da834d5de4b8894a0ab6a49"' : 'data-target="#xs-injectables-links-module-AppModule-852d86b40da834d5de4b8894a0ab6a49"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-852d86b40da834d5de4b8894a0ab6a49"' :
                                        'id="xs-injectables-links-module-AppModule-852d86b40da834d5de4b8894a0ab6a49"' }>
                                        <li class="link">
                                            <a href="injectables/HabitsCategoryService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HabitsCategoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HabitsProgressService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HabitsProgressService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HabitsWorkoutService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HabitsWorkoutService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyMaterialModule.html" data-type="entity-link">MyMaterialModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/DataSource.html" data-type="entity-link">DataSource</a>
                            </li>
                            <li class="link">
                                <a href="classes/Events.html" data-type="entity-link">Events</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/HabitsCategoryService.html" data-type="entity-link">HabitsCategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HabitsProgressService.html" data-type="entity-link">HabitsProgressService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HabitsWorkoutService.html" data-type="entity-link">HabitsWorkoutService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});