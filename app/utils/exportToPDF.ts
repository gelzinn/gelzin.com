import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportPDF = (ref: HTMLDivElement | null, filename?: string) => {
  if (!ref) return;

  const widthRef = ref.offsetWidth;
  ref.style.width = '900px';

  html2canvas(ref).then((canvas) => {
    const imageData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'px', 'a4');

    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imageData, 'PNG', 0, 0, width, height);

    if (filename) pdf.save(`${filename}.pdf`);
    else pdf.save('gelzin.pdf');

    ref.style.width = `${widthRef}px`;
  });

  return;
};
