import { DiagnosisProps } from '../types';

function groupDiagnosesByDate(diagnoses: DiagnosisProps[]) {
  return diagnoses.reduce((groups, diagnosis) => {
    const date = diagnosis.createdAt.toISOString().split('T')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(diagnosis);
    return groups;
  }, {} as Record<string, DiagnosisProps[]>);
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (dateString === today.toISOString().split('T')[0]) {
    return 'Today';
  } else if (dateString === yesterday.toISOString().split('T')[0]) {
    return 'Yesterday';
  } else {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }
}

export { groupDiagnosesByDate, formatDate };
