export interface FormData {
    workRelationship: string;
    companyWorked: string;
    recommend: string;
    ratings: {
      employeeDevelopment: number;
      communication: number;
      transparency: number;
      knowledge: number;
      leadership: number;
      fairness: number;
    };
    review: string;
  }
  
  export class RatingController {
    private formData: FormData;
  
    constructor() {
      this.formData = {
        workRelationship: "",
        companyWorked: "",
        recommend: "",
        ratings: {
          employeeDevelopment: 0,
          communication: 0,
          transparency: 0,
          knowledge: 0,
          leadership: 0,
          fairness: 0,
        },
        review: "",
      };
    }
  
    // Get the form data
    getFormData(): FormData {
      return this.formData;
    }
  
    // Update an input field
    updateField(name: string, value: string): void {
      (this.formData as any)[name] = value;
    }
  
    // Update rating for a specific field
    updateRating(key: string, value: number): void {
      this.formData.ratings[key as keyof FormData["ratings"]] = value;
    }
  
    // Submit the form data
    handleSubmit(onSubmit: (data: FormData) => void): void {
      onSubmit(this.formData);
    }
  }
  