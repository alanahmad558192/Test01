import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { Hero } from '../hero';
import { NO_ERRORS_SCHEMA } from '@angular/core';

//Shallow Test for HeroComponent
fdescribe('HeroComponent', () => {

    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas : [NO_ERRORS_SCHEMA],
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};
        fixture.detectChanges();

        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
    });
});