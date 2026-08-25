document.addEventListener('DOMContentLoaded', () => {
            const step1 = document.getElementById('step-1');
            const step2 = document.getElementById('step-2');
            const step3 = document.getElementById('step-3');
            const step4 = document.getElementById('step-4');
            const step5 = document.getElementById('step-5');
            const step6 = document.getElementById('step-6');
            const step7 = document.getElementById('step-7');
            const stepRejection = document.getElementById('step-rejection');
            
            const nextBtn = document.getElementById('nextBtn');
            const backBtn = document.getElementById('backBtn');
            const nextBtn2 = document.getElementById('nextBtn2');
            const backBtn3 = document.getElementById('backBtn3');
            const nextBtn3 = document.getElementById('nextBtn3');
            const backBtn4 = document.getElementById('backBtn4');
            const nextBtn4 = document.getElementById('nextBtn4');
            const backBtn5 = document.getElementById('backBtn5');
            const nextBtn5 = document.getElementById('nextBtn5');
            const backBtn6 = document.getElementById('backBtn6');
            const nextBtn6 = document.getElementById('nextBtn6');
            const backBtn7 = document.getElementById('backBtn7');
            
            const backToStartBtn = document.getElementById('backToStartBtn');
            const rejectedTypeSpan = document.getElementById('rejectedType');

            const submitFinal = document.getElementById('submitFinal');
            const rejectionMessageText = document.getElementById('rejectionMessageText');
            
            const fullNameInput = document.getElementById('fullNameInput');
            const emailInput = document.getElementById('emailInput');

            // Initialize intlTelInput
            const phoneInputField = document.querySelector("#mobileNumberInput");
            const phoneInput = window.intlTelInput(phoneInputField, {
                preferredCountries: ["us", "gb", "au", "pk"],
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
            });

            const allowedBusinesses = [
                'Local service business',
                'Online coach or consultant',
                'Agency or done-for-you service'
            ];

            const showInputError = (inputId, message) => {
                const errorEl = document.getElementById(`error-${inputId}`);
                const inputEl = document.getElementById(inputId);
                if (errorEl) {
                    errorEl.textContent = message;
                    errorEl.classList.remove('hidden');
                }
                if (inputEl) {
                    inputEl.classList.add('border-red-500');
                    inputEl.classList.remove('border-[#2a2a2c]', 'hover:border-[#8a8a8e]');
                }
            };
            
            const clearInputErrors = () => {
                const inputs = ['operatingStatusInput', 'fullNameInput', 'mobileNumberInput', 'emailInput'];
                inputs.forEach(id => {
                    const errorEl = document.getElementById(`error-${id}`);
                    const inputEl = document.getElementById(id);
                    if (errorEl) {
                        errorEl.classList.add('hidden');
                        errorEl.textContent = '';
                    }
                    if (inputEl) {
                        inputEl.classList.remove('border-red-500');
                        inputEl.classList.add('border-[#2a2a2c]', 'hover:border-[#8a8a8e]');
                    }
                });
            };

            const hideAllSteps = () => {
                clearInputErrors();
                const steps = [step1, step2, step3, step4, step5, step6, step7, stepRejection];
                steps.forEach(step => {
                    step.classList.remove('flex');
                    step.classList.add('hidden');
                });
            };

            const showRejection = (htmlMessage) => {
                rejectionMessageText.innerHTML = htmlMessage;
                hideAllSteps();
                stepRejection.classList.remove('hidden');
                stepRejection.classList.add('flex');
            };

            // Step 1 -> Step 2 or Rejection
            nextBtn.addEventListener('click', () => {
                const selectedBusiness = document.querySelector('input[name="businessType"]:checked').value;
                
                if (allowedBusinesses.includes(selectedBusiness)) {
                    hideAllSteps();
                    step2.classList.remove('hidden');
                    step2.classList.add('flex');
                } else if (selectedBusiness === 'Low ticket product') {
                    showRejection(`Sorry this offer doesn't work with low ticket products due to the workload involved. We have a full end to end agency that would love to work with you though! We work with over 300 businesses and are one of the Australias best performing end to end agency... <br><br><a href="https://revenueroomdigital.com.au/" class="text-brand-lime hover:underline font-semibold" target="_blank">Click here to visit our agency</a>`);
                } else {
                    showRejection(`Sorry we don't work with <span class="text-white font-semibold">${selectedBusiness}</span> businesses. We have an agency website (<a href="https://revenueroomdigital.com.au/" class="text-brand-lime hover:underline" target="_blank">revenueroomdigital.com.au</a>) We wish you all the best!`);
                }
            });

            // Step 2 Back
            backBtn.addEventListener('click', () => {
                hideAllSteps();
                step1.classList.remove('hidden');
                step1.classList.add('flex');
            });

            // Step 2 -> Step 3 or Rejection
            nextBtn2.addEventListener('click', () => {
                const adSpend = document.querySelector('input[name="adSpend"]:checked').value;
                
                if (adSpend === 'Yes') {
                    hideAllSteps();
                    step3.classList.remove('hidden');
                    step3.classList.add('flex');
                } else {
                    showRejection("We only work with businesses that are ready to invest in ads to increase their sales. Come back to us when you're ready to scale!");
                }
            });
            
            // Step 3 Back
            backBtn3.addEventListener('click', () => {
                hideAllSteps();
                step2.classList.remove('hidden');
                step2.classList.add('flex');
            });

            // Step 3 -> Step 4 or Rejection
            nextBtn3.addEventListener('click', () => {
                clearInputErrors();
                const selectElement = document.getElementById('operatingStatusInput');
                const status = selectElement.value;
                
                if (!status) {
                    showInputError('operatingStatusInput', "Please select an option.");
                    return;
                }
                
                if (status === 'No, we open soon') {
                    showRejection("With your business not being open yet. Please come back to us when you are open. We can't help you right now.");
                } else if (status === 'I have a business idea') {
                    showRejection("We don't work with people who have a business idea. When your business is set up and you have clients. Come back to us");
                } else {
                    // It's 'Yes' - proceed to step 4
                    hideAllSteps();
                    step4.classList.remove('hidden');
                    step4.classList.add('flex');
                }
            });

            // Step 4 Back
            backBtn4.addEventListener('click', () => {
                hideAllSteps();
                step3.classList.remove('hidden');
                step3.classList.add('flex');
            });

            // Step 4 -> Step 5
            nextBtn4.addEventListener('click', () => {
                hideAllSteps();
                step5.classList.remove('hidden');
                step5.classList.add('flex');
            });

            // Step 5 Back
            backBtn5.addEventListener('click', () => {
                hideAllSteps();
                step4.classList.remove('hidden');
                step4.classList.add('flex');
            });

            // Step 5 -> Step 6
            nextBtn5.addEventListener('click', () => {
                clearInputErrors();
                if (fullNameInput.value.trim() === '') {
                    showInputError('fullNameInput', "Please enter your full name.");
                    return;
                }
                hideAllSteps();
                step6.classList.remove('hidden');
                step6.classList.add('flex');
            });

            // Step 6 Back
            backBtn6.addEventListener('click', () => {
                hideAllSteps();
                step5.classList.remove('hidden');
                step5.classList.add('flex');
            });

            // Step 6 -> Step 7
            nextBtn6.addEventListener('click', () => {
                clearInputErrors();
                if (!phoneInput.isValidNumber()) {
                    showInputError('mobileNumberInput', "Please enter a valid phone number.");
                    return;
                }
                hideAllSteps();
                step7.classList.remove('hidden');
                step7.classList.add('flex');
            });

            // Step 7 Back
            backBtn7.addEventListener('click', () => {
                hideAllSteps();
                step6.classList.remove('hidden');
                step6.classList.add('flex');
            });

            // Step 7 Submit (Final Submit)
            submitFinal.addEventListener('click', () => {
                document.getElementById('onboardingForm').dispatchEvent(new Event('submit'));
            });

            // Rejection Back
            backToStartBtn.addEventListener('click', () => {
                hideAllSteps();
                step1.classList.remove('hidden');
                step1.classList.add('flex');
            });

            // Prevent default form submission and transition to success view
            document.getElementById('onboardingForm').addEventListener('submit', (e) => {
                e.preventDefault();
                clearInputErrors();
                
                // Final validation just in case
                if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
                    showInputError('emailInput', "Please enter a valid email address.");
                    return;
                }

                // Hide main wrapper and show Calendly UI
                document.getElementById('main-content').classList.add('hidden');
                
                const successView = document.getElementById('success-view');
                successView.classList.remove('hidden');
                successView.classList.add('flex');
                
                // Dynamically initialize Calendly widget safely
                if (window.Calendly) {
                    window.Calendly.initInlineWidget({
                        /* UPDATE THIS URL TO YOUR ACTUAL CALENDLY BOOKING LINK */
                        url: 'https://calendly.com/revenueroomdigital/30min',
                        parentElement: document.getElementById('calendly-embed'),
                        prefill: {
                            name: fullNameInput.value,
                            email: emailInput.value
                        },
                        utm: {}
                    });
                }
            });
        });
