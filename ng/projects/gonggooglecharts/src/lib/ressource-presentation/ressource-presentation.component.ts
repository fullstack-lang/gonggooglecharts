import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

import { RessourceDB } from '../ressource-db'
import { RessourceService } from '../ressource.service'

import { Router, RouterState, ActivatedRoute } from '@angular/router';

export interface ressourceDummyElement {
}

const ELEMENT_DATA: ressourceDummyElement[] = [
];

@Component({
	selector: 'app-ressource-presentation',
	templateUrl: './ressource-presentation.component.html',
	styleUrls: ['./ressource-presentation.component.css'],
})
export class RessourcePresentationComponent implements OnInit {

	// insertion point for declarations

	displayedColumns: string[] = [];
	dataSource = ELEMENT_DATA;

	ressource: RessourceDB;
 
	constructor(
		private ressourceService: RessourceService,
		private route: ActivatedRoute,
		private router: Router,
	) {
		this.router.routeReuseStrategy.shouldReuseRoute = function () {
			return false;
		};
	}

	ngOnInit(): void {
		this.getRessource();

		// observable for changes in 
		this.ressourceService.RessourceServiceChanged.subscribe(
			message => {
				if (message == "update") {
					this.getRessource()
				}
			}
		)
	}

	getRessource(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.ressourceService.getRessource(id)
			.subscribe(
				ressource => {
					this.ressource = ressource

					// insertion point for recovery of durations

				}
			);
	}

	// set presentation outlet
	setPresentationRouterOutlet(structName: string, ID: number) {
		this.router.navigate([{
			outlets: {
				presentation: [structName + "-presentation", ID]
			}
		}]);
	}

	// set editor outlet
	setEditorRouterOutlet(ID: number) {
		this.router.navigate([{
			outlets: {
				editor: ["ressource-detail", ID]
			}
		}]);
	}
}
