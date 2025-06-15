import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentData } from '../investment.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  private readonly initialInvestmentData: InvestmentData = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 5,
    duration: 10,
  };

  formData = signal({ ...this.initialInvestmentData });

  constructor(private investmentService: InvestmentService) {}

  onCalculate() {
    this.investmentService.calculateInvestmentResults(this.formData());
    this.formData.set({ ...this.initialInvestmentData });
  }
}
