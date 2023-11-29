import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersListPage } from './characters-list.page';

describe('CharactersListPage', () => {
  let component: CharactersListPage;
  let fixture: ComponentFixture<CharactersListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CharactersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
