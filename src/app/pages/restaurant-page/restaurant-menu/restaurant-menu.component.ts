import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {
  @ViewChild('tabsNav') tabsNav!: ElementRef;
  @ViewChild('tabsContainer') tabsContainer!: ElementRef;
  @ViewChild('menuTabMobile') menuTabMobile!: ElementRef;
  @ViewChild('tabContent') tabContent!: ElementRef;
  restaurantCategory = [
    {
      id: 1,
      categoryName: 'For you'
    },
    {
      id: 2,
      categoryName: 'For you 2'
    },
    {
      id: 3,
      categoryName: 'For you 3'
    },
    {
      id: 4,
      categoryName: 'For you 4'
    },
    {
      id: 5,
      categoryName: 'For you 5'
    },
    {
      id: 6,
      categoryName: 'For you 6'
    },
    {
      id: 7,
      categoryName: 'For you 7'
    },
    {
      id: 8,
      categoryName: 'For you 8'
    },
    {
      id: 9,
      categoryName: 'For you 9'
    }, {
      id: 10,
      categoryName: 'For you 10'
    },
    {
      id: 11,
      categoryName: 'For you 11'
    },
    {
      id: 12,
      categoryName: 'For you 12'
    },
    {
      id: 13,
      categoryName: 'For you 13'
    }
  ];
  selectedCategory: number = 0;
  tabsPosition: number = 0;
  stepScrollTabValue: number = 300;
  isHandlingButtonTab = false;
  visibleCuisineDrawer: boolean = false;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.selectedCategory = 0;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    if (this.tabContent.nativeElement.getBoundingClientRect().top <= 96) {
      this.renderer.removeClass(this.menuTabMobile.nativeElement, 'hidden');
      this.renderer.addClass(this.menuTabMobile.nativeElement, 'flex');
    }
    else {
      this.renderer.removeClass(this.menuTabMobile.nativeElement, 'flex');
      this.renderer.addClass(this.menuTabMobile.nativeElement, 'hidden');
    }
  }

  goBack(): void {
    window.history.back();
  }
  openCuisineDrawer(): void {
    this.visibleCuisineDrawer = true;
  }

  closeCuisineDrawer(): void {
    this.visibleCuisineDrawer = false;
  }

  selectResCate(index: number): void {
    this.selectedCategory = index;

    if (this.visibleCuisineDrawer) {
      this.visibleCuisineDrawer = false;
      const contentElement = this.el.nativeElement.querySelector(`#section${index + 1}`);
      if (contentElement) {
        const contentOffsetTop = contentElement.offsetTop;
        const menuTabMobileContainerBottom = this.menuTabMobile.nativeElement.getBoundingClientRect().bottom;
        const scrollPosition = contentOffsetTop - menuTabMobileContainerBottom;
        setTimeout(() => {
          window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }, 350);
      }
    }
    else {
      let tab = this.tabsNav.nativeElement.children[index].getBoundingClientRect();
      let tabContainerPos = this.tabsContainer.nativeElement.getBoundingClientRect();

      if (tab.right > tabContainerPos.right) {
        this.tabsPosition -= tab.right - tabContainerPos.right;
      }
      else if (tab.left < tabContainerPos.left) {
        this.tabsPosition -= tab.left - tabContainerPos.left;
      }

      const contentElement = this.el.nativeElement.querySelector(`#section${index + 1}`);
      const restaurantInfor = document.getElementById(`restaurant-infor`);
      const header = document.getElementById('header');

      if (contentElement && header && restaurantInfor) {
        const contentOffsetTop = contentElement.offsetTop;
        const tabsContainerBottom = tabContainerPos.bottom;
        const restaurantInforBottom = restaurantInfor.getBoundingClientRect().bottom;

        if (restaurantInforBottom - header.offsetHeight > 0) {
          const scrollPosition = (contentOffsetTop - tabsContainerBottom) + (restaurantInforBottom - header.offsetHeight);
          window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
        else {
          const scrollPosition = contentOffsetTop - tabsContainerBottom;
          window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
      }
    }

  }

  handleButtonTab(step: number): void {
    if (this.isHandlingButtonTab) {
      return;
    }
    this.isHandlingButtonTab = true;
    let tabNavPos = this.tabsNav.nativeElement.getBoundingClientRect();
    let tabContainerPos = this.tabsContainer.nativeElement.getBoundingClientRect();
    if ((step < 0 && tabNavPos.left < tabContainerPos.left) || (step > 0 && tabNavPos.right > tabContainerPos.right)) {
      if ((step > 0 && tabNavPos.right - step >= tabContainerPos.right) || (step < 0 && tabNavPos.left - step <= tabContainerPos.left)) {
        this.tabsPosition -= step;
      }
      else {
        this.tabsPosition -= (step > 0 ? tabNavPos.right - tabContainerPos.right : tabNavPos.left - tabContainerPos.left);
      }
    }
    setTimeout(() => {
      this.isHandlingButtonTab = false;
    }, 300);
  }
}