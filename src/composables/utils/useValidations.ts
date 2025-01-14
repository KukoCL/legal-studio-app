export default function useValidations() {
  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const clpFormat = (amount: number, withSign = true) => {
    const formatter = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    });

    return withSign ? formatter.format(amount) : formatter.format(amount).replace('$', '');
  };

  const validateRun = (fullRun: string) => {
    const cleanRut = fullRun.replace(/[^0-9kK]/g, '').toUpperCase();
    if (cleanRut.length < 2) return false;

    const body = cleanRut.slice(0, -1);
    const verifier = cleanRut.slice(-1);

    let sum = 0;
    let multiplier = 2;

    for (let i = body.length - 1; i >= 0; i--) {
      sum += parseInt(body[i], 10) * multiplier;
      multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }

    const mod11 = 11 - (sum % 11);
    const expectedVerifier = mod11 === 11 ? '0' : mod11 === 10 ? 'K' : mod11.toString();

    return verifier === expectedVerifier;
  };

  return {
    validateEmail,
    clpFormat,
    validateRun,
  };
}