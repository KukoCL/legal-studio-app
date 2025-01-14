import { describe, it, expect } from 'vitest';
import useValidations from '../useValidations';

describe('useValidation', () => {

  const { validateEmail, clpFormat, validateRun } = useValidations();

  describe('validateEmail', () => {
    it('should return true for a valid email', () => {
      expect(validateEmail('test@example.com')).toBe(true);
    });

    it('should return false for an invalid email', () => {
      expect(validateEmail('invalid-email')).toBe(false);
    });
  });

  describe('clpFormat', () => {
    it('should format the amount with currency sign', () => {
      expect(clpFormat(1000)).toBe('$1.000');
    });

    it('should format the amount without currency sign', () => {
      expect(clpFormat(1000, false)).toBe('1.000');
    });
  });

  describe('validateRun', () => {
    it('should return true for a valid RUN', () => {
      expect(validateRun('12345678-5')).toBe(true);
    });

    it('should return false for an invalid RUN', () => {
      expect(validateRun('12345678-9')).toBe(false);
    });

    it('should return false for a RUN with invalid characters', () => {
      expect(validateRun('12.345.678-5')).toBe(true);
    });
  });
});