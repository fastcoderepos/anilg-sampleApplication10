import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { FilmActorService } from '../film-actor.service';
import { IFilmActor } from '../ifilm-actor';
import { BaseDetailsComponent, Globals, PickerDialogService, ErrorService } from 'src/app/common/shared';
import { GlobalPermissionService } from 'src/app/core/global-permission.service';

import { ActorService } from 'src/app/entities/actor/actor.service';
import { FilmService } from 'src/app/entities/film/film.service';

@Component({
  selector: 'app-film-actor-details',
  templateUrl: './film-actor-details.component.html',
  styleUrls: ['./film-actor-details.component.scss'],
})
export class FilmActorDetailsComponent extends BaseDetailsComponent<IFilmActor> implements OnInit {
  title = 'FilmActor';
  parentUrl = 'filmactor';
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public global: Globals,
    public filmActorService: FilmActorService,
    public pickerDialogService: PickerDialogService,
    public errorService: ErrorService,
    public actorService: ActorService,
    public filmService: FilmService,
    public globalPermissionService: GlobalPermissionService
  ) {
    super(formBuilder, router, route, dialog, global, pickerDialogService, filmActorService, errorService);
  }

  ngOnInit() {
    this.entityName = 'FilmActor';
    this.setAssociations();
    super.ngOnInit();
    this.setForm();
    this.getItem();
    this.setPickerSearchListener();
  }

  setForm() {
    this.itemForm = this.formBuilder.group({
      actorId: ['', Validators.required],
      filmId: ['', Validators.required],
      actorDescriptiveField: [''],
      filmDescriptiveField: [''],
    });

    this.fields = [];
  }

  onItemFetched(item: IFilmActor) {
    this.item = item;
    this.itemForm.patchValue(item);
  }

  setAssociations() {
    this.associations = [
      {
        column: [
          {
            key: 'actorId',
            value: undefined,
            referencedkey: 'actorId',
          },
        ],
        isParent: false,
        table: 'actor',
        type: 'ManyToOne',
        label: 'actor',
        service: this.actorService,
        descriptiveField: 'actorDescriptiveField',
        referencedDescriptiveField: 'actorId',
      },
      {
        column: [
          {
            key: 'filmId',
            value: undefined,
            referencedkey: 'filmId',
          },
        ],
        isParent: false,
        table: 'film',
        type: 'ManyToOne',
        label: 'film',
        service: this.filmService,
        descriptiveField: 'filmDescriptiveField',
        referencedDescriptiveField: 'filmId',
      },
    ];

    this.childAssociations = this.associations.filter((association) => {
      return association.isParent;
    });

    this.parentAssociations = this.associations.filter((association) => {
      return !association.isParent;
    });
  }

  onSubmit() {
    let filmActor = this.itemForm.getRawValue();
    super.onSubmit(filmActor);
  }
}
