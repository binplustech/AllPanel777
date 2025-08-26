import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'cardImageUrl',
	pure: true
})
export class CardImageUrl implements PipeTransform {
	transform(value: unknown): string {
		return `https://wver.sprintstaticdata.com/v156/static/front/img/cards/${value}.png`;
	}
}
