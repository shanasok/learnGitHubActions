import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';

describe('Home Component', () => {
  it('renders the main Next.js logo', () => {
    render(<Home />);
    const nextJsLogo = screen.getByAltText('Next.js logo');
    expect(nextJsLogo).toBeInTheDocument();
    expect(nextJsLogo).toHaveAttribute('src', 'https://nextjs.org/icons/next.svg');
  });

  it('renders the "Deploy now" link with the Vercel logo', () => {
    render(<Home />);
    const deployLink = screen.getByText('Deploy now').closest('a');
    expect(deployLink).toHaveAttribute(
      'href',
      'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
    );

    const vercelLogo = screen.getByAltText('Vercel logomark');
    expect(vercelLogo).toBeInTheDocument();
    expect(vercelLogo).toHaveAttribute('src', 'https://nextjs.org/icons/vercel.svg');
  });

  it('renders the documentation link', () => {
    render(<Home />);
    const docsLink = screen.getByText('Read our docs').closest('a');
    expect(docsLink).toHaveAttribute(
      'href',
      'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
    );
  });

  it('renders all footer links with correct icons and attributes', () => {
    render(<Home />);

    const learnLink = screen.getByText('Learn').closest('a');
    expect(learnLink).toHaveAttribute(
      'href',
      'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
    );

    const examplesLink = screen.getByText('Examples').closest('a');
    expect(examplesLink).toHaveAttribute(
      'href',
      'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
    );

    const goToNextJsLink = screen.getByText('Go to nextjs.org →').closest('a');
    expect(goToNextJsLink).toHaveAttribute(
      'href',
      'https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
    );

    // Check the presence of all footer icons
    const fileIcon = screen.getByAltText('File icon');
    expect(fileIcon).toBeInTheDocument();

    const windowIcon = screen.getByAltText('Window icon');
    expect(windowIcon).toBeInTheDocument();

    const globeIcon = screen.getByAltText('Globe icon');
    expect(globeIcon).toBeInTheDocument();
  });

  it('renders the instruction to edit the page', () => {
    render(<Home />);
    const instruction = screen.getByText(/Get started by editing/);
    expect(instruction).toBeInTheDocument();
  });

  it('renders the list with two items', () => {
    render(<Home />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
    expect(listItems[0]).toHaveTextContent('Get started by editing src/app/page.tsx.');
    expect(listItems[1]).toHaveTextContent('Save and see your changes instantly.');
  });
});
