import { useState } from 'react';

// UI Components
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Select from '../ui/Select';
import Checkbox from '../ui/Checkbox';
import Toggle from '../ui/Toggle';
import Radio from '../ui/Radio';
import FileInput from '../ui/FileInput';
import Alert from '../ui/Alert';
import Spinner from '../ui/Spinner';
import Skeleton from '../ui/Skeleton';
import { ToastProvider, useToast } from '../ui/Toast';
import Progress from '../ui/Progress';
import Modal from '../ui/Modal';
import Accordion from '../ui/Accordion';
import Tabs from '../ui/Tabs';
import Dropdown from '../ui/Dropdown';
import Tooltip from '../ui/Tooltip';
import Drawer from '../ui/Drawer';
import Breadcrumbs from '../ui/Breadcrumbs';
import Pagination from '../ui/Pagination';
import Table from '../ui/Table';
import Carousel from '../ui/Carousel';
import Divider from '../ui/Divider';
import List from '../ui/List';
import SectionHeader from '../ui/SectionHeader';

// Section Components
import Features from '../sections/Features';
import Pricing from '../sections/Pricing';
import Stats from '../sections/Stats';
import Timeline from '../sections/Timeline';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import HeroSection from '../sections/HeroSection';
import CTA from '../sections/CTA';
import FAQSection from '../sections/FAQSection';
import FeatureList from '../sections/FeatureList';
import LogoCloud from '../sections/LogoCloud';
import Team from '../sections/Team';
import Comparison from '../sections/Comparison';
import Newsletter from '../sections/Newsletter';
import Content from '../sections/Content';
import Integrations from '../sections/Integrations';
import Video from '../sections/Video';
import Banner from '../sections/Banner';
import Gallery from '../sections/Gallery';
import Download from '../sections/Download';

// Layout
import Container from '../layout/Container';
import Section from '../layout/Section';

export default function ComponentShowcase() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('buttons');

  const sections = [
    { id: 'buttons', label: '1.1 Buttons', category: 'UI Primitives' },
    { id: 'badges', label: '1.2 Badges', category: 'UI Primitives' },
    { id: 'cards', label: '1.3 Cards', category: 'UI Primitives' },
    { id: 'avatars', label: '1.4 Avatars', category: 'UI Primitives' },
    { id: 'inputs', label: '2.1 Text Inputs', category: 'Form Inputs' },
    { id: 'selects', label: '2.2 Selects', category: 'Form Inputs' },
    { id: 'checkboxes', label: '2.3 Checkboxes & Toggles', category: 'Form Inputs' },
    { id: 'radios', label: '2.4 Radio Buttons', category: 'Form Inputs' },
    { id: 'fileinput', label: '2.5 File Input', category: 'Form Inputs' },
    { id: 'alerts', label: '3.1 Alerts', category: 'Feedback' },
    { id: 'spinners', label: '3.2 Spinners', category: 'Feedback' },
    { id: 'skeletons', label: '3.3 Skeletons', category: 'Feedback' },
    { id: 'toasts', label: '3.4 Toasts', category: 'Feedback' },
    { id: 'progress', label: '3.5 Progress', category: 'Feedback' },
    { id: 'modals', label: '4.1 Modals', category: 'Interactive' },
    { id: 'accordions', label: '4.2 Accordions', category: 'Interactive' },
    { id: 'tabs', label: '4.3 Tabs', category: 'Interactive' },
    { id: 'dropdowns', label: '4.4 Dropdowns', category: 'Interactive' },
    { id: 'tooltips', label: '4.5 Tooltips', category: 'Interactive' },
    { id: 'drawers', label: '4.6 Drawers', category: 'Interactive' },
    { id: 'carousel', label: '4.7 Carousel', category: 'Interactive' },
    { id: 'breadcrumbs', label: '5.1 Breadcrumbs', category: 'Navigation' },
    { id: 'pagination', label: '5.2 Pagination', category: 'Navigation' },
    { id: 'tables', label: '5.3 Tables', category: 'Data Display' },
    { id: 'dividers', label: '5.4 Dividers', category: 'Layout' },
    { id: 'lists', label: '5.5 Lists', category: 'Layout' },
    { id: 'section-headers', label: '5.6 Section Headers', category: 'Layout' },
    { id: 'hero-variants', label: '6.1 Hero (7 variants)', category: 'Sections' },
    { id: 'cta-variants', label: '6.2 CTA (8 variants)', category: 'Sections' },
    { id: 'faq-variants', label: '6.3 FAQ (8 variants)', category: 'Sections' },
    { id: 'features', label: '6.4 Features', category: 'Sections' },
    { id: 'feature-list', label: '6.5 FeatureList (6 variants)', category: 'Sections' },
    { id: 'pricing', label: '6.6 Pricing', category: 'Sections' },
    { id: 'stats', label: '6.7 Stats', category: 'Sections' },
    { id: 'timeline', label: '6.8 Timeline', category: 'Sections' },
    { id: 'testimonials', label: '6.9 Testimonials', category: 'Sections' },
    { id: 'contact', label: '6.10 Contact', category: 'Sections' },
    { id: 'logocloud', label: '6.11 Logo Cloud', category: 'Sections' },
    { id: 'team', label: '6.12 Team', category: 'Sections' },
    { id: 'comparison', label: '6.13 Comparison', category: 'Sections' },
    { id: 'newsletter', label: '6.14 Newsletter', category: 'Sections' },
    { id: 'content', label: '6.15 Content', category: 'Sections' },
    { id: 'integrations', label: '6.16 Integrations', category: 'Sections' },
    { id: 'video', label: '6.17 Video', category: 'Sections' },
    { id: 'banner', label: '6.18 Banner', category: 'Sections' },
    { id: 'gallery', label: '6.19 Gallery', category: 'Sections' },
    { id: 'download', label: '6.20 Download', category: 'Sections' },
  ];

  const categories = [...new Set(sections.map(s => s.category))];

  return (
    <ToastProvider>
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-700">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-bold text-stone-900 dark:text-stone-100">
              Component Library
            </h1>
            <Badge variant="success">v1.0</Badge>
          </div>
          <a href="/" className="text-sm text-stone-600 dark:text-stone-400 hover:text-green-main">
            ← Back to Site
          </a>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 shrink-0 border-r border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 h-[calc(100vh-65px)] sticky top-[65px] overflow-y-auto">
            <nav className="p-4">
              {categories.map(category => (
                <div key={category} className="mb-6">
                  <h3 className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2">
                    {category}
                  </h3>
                  <ul className="space-y-1">
                    {sections
                      .filter(s => s.category === category)
                      .map(section => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            onClick={() => setActiveSection(section.id)}
                            className={`
                              block px-3 py-2 rounded-lg text-sm transition-colors
                              ${activeSection === section.id
                                ? 'bg-green-lightest dark:bg-green-dark/20 text-green-dark dark:text-green-light font-medium'
                                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
                              }
                            `}
                          >
                            {section.label}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-8 max-w-5xl">
          {/* 1. UI Primitives */}
          <ComponentSection id="buttons" title="1.1 Buttons" description="Button component with multiple variants and sizes">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="brass">Brass</Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button variant="primary" size="default">Default Size</Button>
              <Button variant="primary" size="large">Large Size</Button>
            </div>
          </ComponentSection>

          <ComponentSection id="badges" title="1.2 Badges" description="Badge component for labels and status indicators">
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <Badge variant="success" dot>With Dot</Badge>
              <Badge size="sm">Small</Badge>
              <Badge size="lg">Large</Badge>
            </div>
          </ComponentSection>

          <ComponentSection id="cards" title="1.3 Cards" description="Card containers with multiple variants">
            <div className="grid sm:grid-cols-2 gap-4">
              <Card variant="default" padding="md">
                <Card.Header>
                  <Card.Title>Default Card</Card.Title>
                  <Card.Description>A basic card with border</Card.Description>
                </Card.Header>
                <Card.Body>Card content goes here</Card.Body>
              </Card>
              <Card variant="elevated" padding="md">
                <Card.Header>
                  <Card.Title>Elevated Card</Card.Title>
                  <Card.Description>Card with shadow</Card.Description>
                </Card.Header>
                <Card.Body>Hover for more shadow</Card.Body>
              </Card>
              <Card variant="outlined" padding="md">
                <Card.Header>
                  <Card.Title>Outlined Card</Card.Title>
                  <Card.Description>Stronger border</Card.Description>
                </Card.Header>
              </Card>
              <Card variant="ghost" padding="md">
                <Card.Header>
                  <Card.Title>Ghost Card</Card.Title>
                  <Card.Description>Subtle background</Card.Description>
                </Card.Header>
              </Card>
            </div>
          </ComponentSection>

          <ComponentSection id="avatars" title="1.4 Avatars" description="User avatars with status indicators">
            <div className="flex flex-wrap items-end gap-4">
              <Avatar name="John Doe" size="xs" />
              <Avatar name="John Doe" size="sm" />
              <Avatar name="John Doe" size="md" />
              <Avatar name="John Doe" size="lg" />
              <Avatar name="John Doe" size="xl" />
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Avatar name="Online User" status="online" />
              <Avatar name="Offline User" status="offline" />
              <Avatar name="Busy User" status="busy" />
              <Avatar name="Away User" status="away" />
            </div>
            <div className="mt-4">
              <Avatar.Group max={4}>
                <Avatar name="User 1" />
                <Avatar name="User 2" />
                <Avatar name="User 3" />
                <Avatar name="User 4" />
                <Avatar name="User 5" />
                <Avatar name="User 6" />
              </Avatar.Group>
            </div>
          </ComponentSection>

          {/* 2. Form Inputs */}
          <ComponentSection id="inputs" title="2.1 Text Inputs" description="Input fields with labels, hints, and error states">
            <div className="grid sm:grid-cols-2 gap-6">
              <Input label="Default Input" placeholder="Enter text..." />
              <Input label="With Hint" placeholder="Enter email..." hint="We'll never share your email" />
              <Input label="Error State" placeholder="Enter value..." error="This field is required" />
              <Input label="Disabled" placeholder="Can't edit this" disabled />
            </div>
            <div className="grid sm:grid-cols-3 gap-6 mt-6">
              <Input label="Small" size="sm" placeholder="Small input" />
              <Input label="Medium" size="md" placeholder="Medium input" />
              <Input label="Large" size="lg" placeholder="Large input" />
            </div>
            <div className="mt-6">
              <Textarea label="Textarea" placeholder="Enter a longer message..." rows={4} />
            </div>
          </ComponentSection>

          <ComponentSection id="selects" title="2.2 Selects" description="Select dropdowns for choosing options">
            <div className="grid sm:grid-cols-2 gap-6">
              <Select
                label="Default Select"
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' },
                ]}
              />
              <Select
                label="With Error"
                error="Please select an option"
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                ]}
              />
            </div>
          </ComponentSection>

          <ComponentSection id="checkboxes" title="2.3 Checkboxes & Toggles" description="Checkbox and toggle switch components">
            <CheckboxDemo />
          </ComponentSection>

          <ComponentSection id="radios" title="2.4 Radio Buttons" description="Radio button groups for single selection">
            <RadioDemo />
          </ComponentSection>

          <ComponentSection id="fileinput" title="2.5 File Input" description="File upload with drag and drop">
            <div className="space-y-8">
              <div>
                <p className="text-sm text-stone-500 mb-3">Default Style</p>
                <FileInput label="Upload file" accept=".pdf,.doc,.docx" />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-3">Dropzone Style</p>
                <FileInput
                  variant="dropzone"
                  label="Upload documents"
                  accept=".pdf,.png,.jpg"
                  multiple
                  maxSize={5 * 1024 * 1024}
                  hint="PDF, PNG, or JPG up to 5MB"
                />
              </div>
            </div>
          </ComponentSection>

          {/* 3. Feedback */}
          <ComponentSection id="alerts" title="3.1 Alerts" description="Alert messages for user feedback">
            <div className="space-y-4">
              <Alert variant="info" title="Information">
                This is an informational message.
              </Alert>
              <Alert variant="success" title="Success">
                Your changes have been saved.
              </Alert>
              <Alert variant="warning" title="Warning">
                Please review before continuing.
              </Alert>
              <Alert variant="error" title="Error">
                Something went wrong. Please try again.
              </Alert>
              <Alert variant="info" dismissible onDismiss={() => {}}>
                This alert can be dismissed.
              </Alert>
            </div>
          </ComponentSection>

          <ComponentSection id="spinners" title="3.2 Spinners" description="Loading indicators">
            <div className="flex flex-wrap items-center gap-8">
              <div className="text-center">
                <Spinner size="sm" />
                <p className="text-xs mt-2 text-stone-500">Small</p>
              </div>
              <div className="text-center">
                <Spinner size="md" />
                <p className="text-xs mt-2 text-stone-500">Medium</p>
              </div>
              <div className="text-center">
                <Spinner size="lg" />
                <p className="text-xs mt-2 text-stone-500">Large</p>
              </div>
              <div className="text-center">
                <Spinner size="md" variant="primary" />
                <p className="text-xs mt-2 text-stone-500">Primary</p>
              </div>
              <div className="text-center">
                <Spinner.Dots size="md" />
                <p className="text-xs mt-2 text-stone-500">Dots</p>
              </div>
              <div className="text-center">
                <Spinner.Pulse size="md" />
                <p className="text-xs mt-2 text-stone-500">Pulse</p>
              </div>
            </div>
          </ComponentSection>

          <ComponentSection id="skeletons" title="3.3 Skeletons" description="Loading placeholder components">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium mb-2 text-stone-600">Text Skeleton</p>
                <Skeleton.Text lines={3} />
              </div>
              <div>
                <p className="text-sm font-medium mb-2 text-stone-600">Avatar Skeleton</p>
                <div className="flex gap-4">
                  <Skeleton.Avatar size="sm" />
                  <Skeleton.Avatar size="md" />
                  <Skeleton.Avatar size="lg" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm font-medium mb-2 text-stone-600">Card Skeleton</p>
                <Skeleton.Card />
              </div>
            </div>
          </ComponentSection>

          <ComponentSection id="toasts" title="3.4 Toasts" description="Toast notifications for user feedback">
            <ToastDemo />
          </ComponentSection>

          <ComponentSection id="progress" title="3.5 Progress" description="Progress bars and indicators">
            <div className="space-y-8">
              <div className="space-y-4">
                <Progress value={25} label="Basic Progress" showValue />
                <Progress value={50} variant="secondary" showValue />
                <Progress value={75} variant="success" showValue />
                <Progress value={100} variant="info" showValue />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-3">Sizes</p>
                <div className="space-y-3">
                  <Progress value={60} size="xs" />
                  <Progress value={60} size="sm" />
                  <Progress value={60} size="md" />
                  <Progress value={60} size="lg" />
                </div>
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-3">Indeterminate</p>
                <Progress indeterminate />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-3">Radial Progress</p>
                <div className="flex flex-wrap gap-6">
                  <Progress.Radial value={25} size="sm" />
                  <Progress.Radial value={50} size="md" />
                  <Progress.Radial value={75} size="lg" />
                  <Progress.Radial value={100} size="lg" variant="success" />
                </div>
              </div>
            </div>
          </ComponentSection>

          {/* 4. Interactive */}
          <ComponentSection id="modals" title="4.1 Modals" description="Modal dialogs for focused interactions">
            <ModalDemo />
          </ComponentSection>

          <ComponentSection id="accordions" title="4.2 Accordions" description="Collapsible content sections">
            <Accordion defaultValue="item-1">
              <Accordion.Item value="item-1">
                <Accordion.Trigger>What is AccountMap?</Accordion.Trigger>
                <Accordion.Content>
                  AccountMap is a visual account mapping and territory planning tool designed for sales teams.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-2">
                <Accordion.Trigger>How does pricing work?</Accordion.Trigger>
                <Accordion.Content>
                  We offer flexible pricing plans based on team size and features needed. Contact us for details.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-3">
                <Accordion.Trigger>Is there a free trial?</Accordion.Trigger>
                <Accordion.Content>
                  Yes! We offer a 14-day free trial with full access to all features.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
          </ComponentSection>

          <ComponentSection id="tabs" title="4.3 Tabs" description="Tabbed navigation for content sections">
            <TabsDemo />
          </ComponentSection>

          <ComponentSection id="dropdowns" title="4.4 Dropdowns" description="Dropdown menus for actions">
            <DropdownDemo />
          </ComponentSection>

          <ComponentSection id="tooltips" title="4.5 Tooltips" description="Hover tooltips for additional info">
            <div className="flex flex-wrap gap-4">
              <Tooltip content="Top tooltip" side="top">
                <Button variant="outline">Hover (Top)</Button>
              </Tooltip>
              <Tooltip content="Right tooltip" side="right">
                <Button variant="outline">Hover (Right)</Button>
              </Tooltip>
              <Tooltip content="Bottom tooltip" side="bottom">
                <Button variant="outline">Hover (Bottom)</Button>
              </Tooltip>
              <Tooltip content="Left tooltip" side="left">
                <Button variant="outline">Hover (Left)</Button>
              </Tooltip>
            </div>
          </ComponentSection>

          <ComponentSection id="drawers" title="4.6 Drawers" description="Slide-out panels for secondary content">
            <DrawerDemo />
          </ComponentSection>

          <ComponentSection id="carousel" title="4.7 Carousel" description="Image and content carousels">
            <div className="space-y-8">
              <Carousel showArrows showDots className="h-64 rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-700">
                <div className="h-64 flex items-center justify-center bg-gradient-to-r from-green-light to-green-main text-white text-2xl font-bold">
                  Slide 1
                </div>
                <div className="h-64 flex items-center justify-center bg-gradient-to-r from-brass-light to-brass-main text-white text-2xl font-bold">
                  Slide 2
                </div>
                <div className="h-64 flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 text-white text-2xl font-bold">
                  Slide 3
                </div>
              </Carousel>
            </div>
          </ComponentSection>

          {/* 5. Navigation & Data */}
          <ComponentSection id="breadcrumbs" title="5.1 Breadcrumbs" description="Navigation breadcrumb trails">
            <div className="space-y-6">
              <Breadcrumbs>
                <Breadcrumbs.Item href="/" icon={Breadcrumbs.HomeIcon}>Home</Breadcrumbs.Item>
                <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
                <Breadcrumbs.Item href="/products/maps">Maps</Breadcrumbs.Item>
                <Breadcrumbs.Item current>Territory Map</Breadcrumbs.Item>
              </Breadcrumbs>
            </div>
          </ComponentSection>

          <ComponentSection id="pagination" title="5.2 Pagination" description="Page navigation controls">
            <div className="space-y-8">
              <div>
                <p className="text-sm text-stone-500 mb-3">Full Pagination</p>
                <PaginationDemo />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-3">Simple Pagination</p>
                <SimplePaginationDemo />
              </div>
            </div>
          </ComponentSection>

          <ComponentSection id="tables" title="5.3 Tables" description="Data tables with sorting">
            <Table striped hoverable>
              <Table.Head>
                <Table.Row>
                  <Table.Header>Name</Table.Header>
                  <Table.Header>Role</Table.Header>
                  <Table.Header>Status</Table.Header>
                  <Table.Header align="right">Actions</Table.Header>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>John Doe</Table.Cell>
                  <Table.Cell>Sales Rep</Table.Cell>
                  <Table.Cell><Badge variant="success" dot>Active</Badge></Table.Cell>
                  <Table.Cell align="right">
                    <Button variant="secondary">Edit</Button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Jane Smith</Table.Cell>
                  <Table.Cell>Account Exec</Table.Cell>
                  <Table.Cell><Badge variant="success" dot>Active</Badge></Table.Cell>
                  <Table.Cell align="right">
                    <Button variant="secondary">Edit</Button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Bob Johnson</Table.Cell>
                  <Table.Cell>Manager</Table.Cell>
                  <Table.Cell><Badge variant="warning" dot>Away</Badge></Table.Cell>
                  <Table.Cell align="right">
                    <Button variant="secondary">Edit</Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </ComponentSection>

          {/* Layout */}
          <ComponentSection id="dividers" title="5.4 Dividers" description="Visual separators">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-stone-500 mb-2">Solid</p>
                <Divider />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-2">Dashed</p>
                <Divider variant="dashed" />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-2">With Label</p>
                <Divider label="OR" />
              </div>
            </div>
          </ComponentSection>

          <ComponentSection id="lists" title="5.5 Lists" description="List component with multiple styles and variants">
            <div className="space-y-8">
              <div>
                <p className="text-sm text-stone-500 mb-3">Check List (green)</p>
                <List
                  variant="check"
                  items={['No credit card required', 'Free 14-day trial', 'Cancel anytime', '24/7 support']}
                />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-3">Bullet List (2 columns)</p>
                <List
                  variant="bullet"
                  columns={2}
                  items={['Visual territory mapping', 'CRM integration', 'Real-time collaboration', 'Custom reports', 'API access', 'Mobile app']}
                />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-3">Numbered List</p>
                <List
                  variant="numbered"
                  items={['Sign up for an account', 'Connect your CRM', 'Import your accounts', 'Start mapping territories']}
                />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-3">Description List</p>
                <List
                  variant="description"
                  items={[
                    { title: 'Accounts', description: '500+ imported and mapped' },
                    { title: 'Territories', description: '12 active regions defined' },
                    { title: 'Team Members', description: '8 users with access' },
                  ]}
                />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-3">Interactive Checklist</p>
                <List.Checklist
                  items={[
                    { text: 'Set up account', checked: true },
                    { text: 'Import data', checked: true },
                    { text: 'Define territories', checked: false },
                    { text: 'Invite team members', checked: false },
                  ]}
                />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-3">Comparison (Pros/Cons)</p>
                <List.Comparison
                  pros={['Easy to use', 'Great support', 'Affordable pricing']}
                  cons={['Learning curve', 'Limited integrations']}
                />
              </div>
            </div>
          </ComponentSection>

          <ComponentSection id="section-headers" title="5.6 Section Headers" description="Reusable header component with multiple variants">
            <div className="space-y-12">
              <div>
                <p className="text-sm text-stone-500 mb-4">Default (Centered with Badge)</p>
                <SectionHeader
                  badge="Features"
                  title="Everything you need"
                  subtitle="Built for modern sales teams who want to close more deals."
                  animated={false}
                />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-4">With Eyebrow</p>
                <SectionHeader.WithEyebrow
                  eyebrow="Why choose us"
                  title="Built for growth"
                  subtitle="Scale your sales operations with confidence."
                  align="left"
                />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-4">With Underline Accent</p>
                <SectionHeader.Underline
                  title="Our Process"
                  subtitle="A simple three-step approach to territory success."
                />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-4">With Highlight</p>
                <SectionHeader.Highlight
                  title="Make every account count"
                  highlightedText="every account"
                  subtitle="Turn data into actionable territory insights."
                />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-4">With Icon</p>
                <SectionHeader.WithIcon
                  icon={SectionHeader.Icons.Rocket}
                  title="Launch faster"
                  subtitle="Get up and running in minutes, not weeks."
                />
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-4">Split Layout</p>
                <SectionHeader.Split
                  badge="Case Studies"
                  title="Real results from real teams"
                  description="See how leading sales organizations transformed their territory planning with AccountMap."
                  cta={{ text: 'View All', href: '#' }}
                />
              </div>
            </div>
          </ComponentSection>

          {/* 6. Sections */}

          {/* 6.1 Hero Variants */}
          <div className="mt-16 -mx-8 bg-gradient-to-b from-green-lightest to-white dark:from-green-dark/10 dark:to-stone-800 border-y border-stone-200 dark:border-stone-700">
            <ComponentSection id="hero-variants" title="6.1 Hero Section (7 variants)" description="Configurable hero with multiple layout options" fullWidth>
              <div className="px-8 pb-8">
                <p className="text-sm text-stone-500 mb-4">Available variants: centered, split, background, video, phone, withForm, gradient</p>
              </div>
              <HeroSection
                variant="centered"
                badge="New Release"
                title="Build something amazing"
                subtitle="The all-in-one platform for modern teams. Start building today with our powerful tools."
                cta={{ text: 'Get Started', href: '#' }}
                ctaSecondary={{ text: 'Learn More', href: '#' }}
                features={['No credit card required', 'Free 14-day trial', 'Cancel anytime']}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="hero-split" title="Hero: Split Variant" description="Image on side with content" fullWidth>
              <HeroSection
                variant="split"
                badge="Territory Planning"
                title="See your accounts on a map"
                subtitle="Visualize, plan, and coordinate go-to-market activity around your accounts."
                cta={{ text: 'Start Free', href: '#' }}
                ctaSecondary={{ text: 'Watch Demo', href: '#' }}
                features={['Set up in minutes', 'No credit card required']}
                image="https://placehold.co/600x400/22c55e/ffffff?text=App+Screenshot"
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="hero-gradient" title="Hero: Gradient Variant" description="Gradient background with white text" fullWidth>
              <HeroSection
                variant="gradient"
                badge="Limited Time"
                title="Transform your workflow"
                subtitle="Join thousands of teams already using our platform to boost productivity."
                cta={{ text: 'Start Free Trial', href: '#' }}
                ctaSecondary={{ text: 'Contact Sales', href: '#' }}
                features={['Enterprise ready', 'SOC 2 Compliant', '99.9% Uptime']}
              />
            </ComponentSection>
          </div>

          {/* 6.2 CTA Variants */}
          <div className="-mx-8 bg-white dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="cta-variants" title="6.2 CTA Section (8 variants)" description="Call-to-action sections with multiple styles" fullWidth>
              <div className="px-8 pb-4">
                <p className="text-sm text-stone-500 mb-4">Available variants: simple, stacked, split, background, gradient, banner, newsletter, twoColumn</p>
              </div>
              <CTA
                variant="simple"
                badge="Get Started"
                title="Ready to dive in?"
                subtitle="Start your free trial today. No credit card required."
                cta={{ text: 'Start Free Trial', href: '#' }}
                ctaSecondary={{ text: 'Contact Sales', href: '#' }}
                features={['Free 14-day trial', 'No setup fees', 'Cancel anytime']}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="cta-stacked" title="CTA: Stacked (Dark Panel)" description="CTA on dark background panel" fullWidth>
              <CTA
                variant="stacked"
                badge="Special Offer"
                title="Start mapping your territory today"
                subtitle="Join 10,000+ sales teams already using AccountMap."
                cta={{ text: 'Get Started Free', href: '#' }}
                ctaSecondary={{ text: 'Schedule Demo', href: '#' }}
                features={['No credit card', 'Setup in 5 min', 'Free forever plan']}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="cta-gradient" title="CTA: Gradient" description="CTA with gradient background" fullWidth>
              <CTA
                variant="gradient"
                badge="Limited Time"
                title="50% off for early adopters"
                subtitle="Lock in your discount before it's gone."
                cta={{ text: 'Claim Discount', href: '#' }}
                ctaSecondary={{ text: 'Learn More', href: '#' }}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-white dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="cta-banner" title="CTA: Banner" description="Minimal full-width banner" fullWidth>
              <CTA
                variant="banner"
                badge="NEW"
                title="Version 2.0 is here with powerful new features."
                cta={{ text: 'See What\'s New', href: '#' }}
              />
            </ComponentSection>
          </div>

          {/* 6.3 FAQ Variants */}
          <div className="-mx-8 bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="faq-variants" title="6.3 FAQ Section (8 variants)" description="FAQ with accordion and multiple layouts" fullWidth>
              <div className="px-8 pb-4">
                <p className="text-sm text-stone-500">Available variants: accordion, twoColumn, offset, grid, list, categorized, searchable, sideBySide</p>
              </div>
              <FAQSection
                variant="accordion"
                badge="FAQ"
                title="Frequently asked questions"
                subtitle="Everything you need to know about the product."
                items={[
                  { question: 'How does the free trial work?', answer: 'You get full access to all features for 14 days. No credit card required.' },
                  { question: 'Can I change my plan later?', answer: 'Yes, you can upgrade or downgrade your plan at any time from your account settings.' },
                  { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.' },
                  { question: 'Is there a setup fee?', answer: 'No, there are no setup fees. You only pay for your subscription.' },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-white dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="faq-two-column" title="FAQ: Two Column" description="Intro on left, accordion on right" fullWidth>
              <FAQSection
                variant="twoColumn"
                badge="Support"
                title="Have questions? We have answers."
                subtitle="Can't find what you're looking for? Contact our support team."
                items={[
                  { question: 'How do I get started?', answer: 'Sign up for a free account and follow our quick start guide.' },
                  { question: 'Do you offer refunds?', answer: 'Yes, we offer a 30-day money-back guarantee on all plans.' },
                  { question: 'Can I invite my team?', answer: 'Absolutely! You can invite unlimited team members on Pro and Enterprise plans.' },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="faq-grid" title="FAQ: Grid (Cards)" description="Questions in card grid layout" fullWidth>
              <FAQSection
                variant="grid"
                columns={2}
                badge="Help Center"
                title="Quick answers"
                items={[
                  { question: 'Is my data secure?', answer: 'Yes, we use industry-standard encryption and are SOC 2 compliant.' },
                  { question: 'Can I export my data?', answer: 'You can export all your data anytime in CSV or JSON format.' },
                  { question: 'Do you have an API?', answer: 'Yes, we offer a REST API with comprehensive documentation.' },
                  { question: 'What integrations do you support?', answer: 'We integrate with Salesforce, HubSpot, Slack, and 50+ other tools.' },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-white dark:bg-stone-800 border-y border-stone-200 dark:border-stone-700">
            <ComponentSection id="features" title="6.4 Features Section" description="Feature grids with icons" fullWidth>
              <Features
                badge="Features"
                title="Everything you need"
                subtitle="Built for modern sales teams"
                columns={3}
                features={[
                  { icon: Features.Icons.Lightning, title: 'Fast Setup', description: 'Get started in minutes, not days' },
                  { icon: Features.Icons.Shield, title: 'Secure', description: 'Enterprise-grade security built in' },
                  { icon: Features.Icons.Chart, title: 'Analytics', description: 'Deep insights into your territory' },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="feature-list" title="6.5 FeatureList Section (6 variants)" description="Alternating features with images" fullWidth>
              <div className="px-8 pb-4">
                <p className="text-sm text-stone-500">Available variants: alternating, stacked, centered, timeline, cards, bento</p>
              </div>
              <FeatureList
                variant="alternating"
                badge="Why AccountMap"
                title="Built for modern sales teams"
                subtitle="Everything you need to visualize, plan, and optimize your territory."
                features={[
                  {
                    icon: FeatureList.Icons.Map,
                    title: 'Visual Territory Mapping',
                    description: 'See all your accounts on an interactive map. Quickly identify coverage gaps, plan routes, and optimize your territory strategy.',
                    image: 'https://placehold.co/600x400/22c55e/ffffff?text=Territory+Map',
                    benefits: ['Interactive map view', 'Route optimization', 'Coverage analysis'],
                  },
                  {
                    icon: FeatureList.Icons.Users,
                    title: 'Team Collaboration',
                    description: 'Work together in real-time. Share territories, assign accounts, and keep everyone aligned on the go-to-market strategy.',
                    image: 'https://placehold.co/600x400/3b82f6/ffffff?text=Collaboration',
                    benefits: ['Real-time sync', 'Role-based access', 'Activity tracking'],
                  },
                  {
                    icon: FeatureList.Icons.Lightning,
                    title: 'CRM Integration',
                    description: 'Connect with Salesforce, HubSpot, and other popular CRMs. Keep your data in sync without manual updates.',
                    image: 'https://placehold.co/600x400/eab308/ffffff?text=Integrations',
                    benefits: ['One-click setup', 'Bi-directional sync', 'Custom field mapping'],
                  },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-white dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="feature-list-cards" title="FeatureList: Cards Variant" description="Feature cards with icons" fullWidth>
              <FeatureList
                variant="cards"
                badge="Platform"
                title="Powerful features"
                features={[
                  {
                    icon: FeatureList.Icons.Shield,
                    title: 'Enterprise Security',
                    description: 'SOC 2 compliant with SSO, audit logs, and encryption at rest.',
                  },
                  {
                    icon: FeatureList.Icons.Chart,
                    title: 'Advanced Analytics',
                    description: 'Deep insights into territory performance and rep productivity.',
                  },
                  {
                    icon: FeatureList.Icons.Globe,
                    title: 'Global Support',
                    description: '24/7 support across all time zones with dedicated success managers.',
                  },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="pricing" title="6.6 Pricing Section" description="Pricing tables" fullWidth>
              <Pricing
                badge="Pricing"
                title="Simple, transparent pricing"
                subtitle="Choose the plan that's right for you"
                plans={[
                  {
                    name: 'Starter',
                    description: 'For small teams',
                    price: 29,
                    features: ['Up to 5 users', 'Basic analytics', 'Email support'],
                  },
                  {
                    name: 'Pro',
                    description: 'For growing teams',
                    price: 79,
                    popular: true,
                    highlighted: true,
                    features: ['Up to 20 users', 'Advanced analytics', 'Priority support', 'API access'],
                  },
                  {
                    name: 'Enterprise',
                    description: 'For large organizations',
                    price: 'Custom',
                    features: ['Unlimited users', 'Custom integrations', 'Dedicated support', 'SLA'],
                  },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-white dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="stats" title="6.7 Stats Section" description="Animated statistics display" fullWidth>
              <Stats
                badge="By the Numbers"
                title="Trusted by teams worldwide"
                stats={[
                  { value: 10000, suffix: '+', label: 'Active Users' },
                  { value: 500, suffix: '+', label: 'Companies' },
                  { value: 99, suffix: '%', label: 'Uptime' },
                  { value: 24, suffix: '/7', label: 'Support' },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="timeline" title="6.8 Timeline Section" description="Steps and timeline displays" fullWidth>
              <Timeline
                badge="How it Works"
                title="Get started in 3 steps"
                items={[
                  { title: 'Sign Up', description: 'Create your account in seconds', status: 'completed' },
                  { title: 'Import Data', description: 'Connect your CRM or upload a CSV', status: 'current' },
                  { title: 'Start Mapping', description: 'Visualize and plan your territory', status: 'upcoming' },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-white dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="testimonials" title="6.9 Testimonials Section" description="Customer testimonials" fullWidth>
              <Testimonials
                badge="Testimonials"
                title="What our customers say"
                columns={2}
                testimonials={[
                  {
                    quote: 'AccountMap transformed how we plan our territories. The visual interface is intuitive and powerful.',
                    author: 'Sarah Chen',
                    role: 'VP of Sales',
                    company: 'TechCorp',
                    rating: 5,
                  },
                  {
                    quote: 'Finally, a tool that makes account mapping simple. Our team adopted it immediately.',
                    author: 'Michael Brown',
                    role: 'Sales Director',
                    company: 'GrowthCo',
                    rating: 5,
                  },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="contact" title="6.10 Contact Section" description="Contact forms" fullWidth>
              <Contact
                badge="Contact"
                title="Get in touch"
                subtitle="We'd love to hear from you"
                variant="centered"
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-white dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="logocloud" title="6.11 Logo Cloud" description="Client and partner logos" fullWidth>
              <LogoCloud
                title="Trusted by industry leaders"
                logos={[
                  { name: 'Acme Corp', logo: 'https://placehold.co/120x40/e5e7eb/9ca3af?text=Acme' },
                  { name: 'Globex', logo: 'https://placehold.co/120x40/e5e7eb/9ca3af?text=Globex' },
                  { name: 'Stark Inc', logo: 'https://placehold.co/120x40/e5e7eb/9ca3af?text=Stark' },
                  { name: 'Wayne Co', logo: 'https://placehold.co/120x40/e5e7eb/9ca3af?text=Wayne' },
                  { name: 'Umbrella', logo: 'https://placehold.co/120x40/e5e7eb/9ca3af?text=Umbrella' },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="team" title="6.12 Team Section" description="Team member profiles" fullWidth>
              <Team
                badge="Our Team"
                title="Meet the people behind AccountMap"
                members={[
                  {
                    name: 'Sarah Chen',
                    role: 'CEO & Founder',
                    bio: 'Former VP of Sales at TechCorp',
                    avatar: 'https://placehold.co/200x200/22c55e/ffffff?text=SC',
                    social: {
                      twitter: '#',
                      linkedin: '#',
                    },
                  },
                  {
                    name: 'Michael Brown',
                    role: 'CTO',
                    bio: 'Engineering lead for 10+ years',
                    avatar: 'https://placehold.co/200x200/3b82f6/ffffff?text=MB',
                    social: {
                      twitter: '#',
                      linkedin: '#',
                    },
                  },
                  {
                    name: 'Emily Davis',
                    role: 'Head of Product',
                    bio: 'Product strategist and designer',
                    avatar: 'https://placehold.co/200x200/eab308/ffffff?text=ED',
                    social: {
                      twitter: '#',
                      linkedin: '#',
                    },
                  },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-white dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="comparison" title="6.13 Comparison Section" description="Feature comparison tables" fullWidth>
              <Comparison
                badge="Compare"
                title="How we stack up"
                features={[
                  { name: 'Visual Territory Mapping', us: true, competitor: false },
                  { name: 'CRM Integration', us: true, competitor: true },
                  { name: 'Real-time Collaboration', us: true, competitor: false },
                  { name: 'Custom Reports', us: true, competitor: 'Limited' },
                  { name: 'API Access', us: true, competitor: 'Enterprise only' },
                  { name: 'Mobile App', us: true, competitor: true },
                ]}
                usLabel="AccountMap"
                competitorLabel="Others"
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="newsletter" title="6.14 Newsletter Section" description="Email signup forms" fullWidth>
              <Newsletter
                badge="Stay Updated"
                title="Subscribe to our newsletter"
                subtitle="Get the latest news and updates delivered to your inbox."
                variant="card"
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-white dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="content" title="6.15 Content Section" description="Split content with images" fullWidth>
              <Content
                badge="Why Us"
                title="Built for sales teams that want to win"
                content="Our platform combines powerful territory mapping with intuitive collaboration tools. Visualize your accounts, plan your strategy, and execute with precision."
                image="https://placehold.co/600x400/22c55e/ffffff?text=Territory+Map"
                features={[
                  'Visual account mapping',
                  'Real-time team collaboration',
                  'Integrated with your CRM',
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="integrations" title="6.16 Integrations Section" description="Integration logos and cards" fullWidth>
              <Integrations
                badge="Integrations"
                title="Works with your favorite tools"
                subtitle="Connect AccountMap to your existing workflow"
                columns={4}
                integrations={[
                  { name: 'Salesforce', logo: 'https://placehold.co/48x48/00a1e0/ffffff?text=SF', status: 'available' },
                  { name: 'HubSpot', logo: 'https://placehold.co/48x48/ff7a59/ffffff?text=HS', status: 'available' },
                  { name: 'Slack', logo: 'https://placehold.co/48x48/4a154b/ffffff?text=SL', status: 'available' },
                  { name: 'Zapier', logo: 'https://placehold.co/48x48/ff4a00/ffffff?text=ZP', status: 'coming' },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-white dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="video" title="6.17 Video Section" description="Embedded video with thumbnail" fullWidth>
              <Video
                badge="See It In Action"
                title="Watch a quick demo"
                subtitle="Learn how AccountMap can transform your sales planning in just 2 minutes."
                videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                thumbnailUrl="https://placehold.co/800x450/22c55e/ffffff?text=Video+Thumbnail"
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="banner" title="6.18 Banner Section" description="Promotional banners" fullWidth>
              <div className="py-8">
                <Banner
                  text="New feature alert! Check out our latest territory insights dashboard."
                  cta={{ text: 'Learn more', href: '#' }}
                  variant="gradient"
                  dismissible={false}
                />
              </div>
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-white dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700">
            <ComponentSection id="gallery" title="6.19 Gallery Section" description="Image gallery with lightbox" fullWidth>
              <Gallery
                badge="Gallery"
                title="See AccountMap in action"
                columns={3}
                images={[
                  { src: 'https://placehold.co/400x300/22c55e/ffffff?text=Dashboard', alt: 'Dashboard', caption: 'Main Dashboard' },
                  { src: 'https://placehold.co/400x300/3b82f6/ffffff?text=Map+View', alt: 'Map View', caption: 'Territory Map' },
                  { src: 'https://placehold.co/400x300/eab308/ffffff?text=Reports', alt: 'Reports', caption: 'Analytics Reports' },
                  { src: 'https://placehold.co/400x300/ef4444/ffffff?text=Team', alt: 'Team', caption: 'Team Collaboration' },
                  { src: 'https://placehold.co/400x300/8b5cf6/ffffff?text=Mobile', alt: 'Mobile', caption: 'Mobile App' },
                  { src: 'https://placehold.co/400x300/06b6d4/ffffff?text=Settings', alt: 'Settings', caption: 'Settings Panel' },
                ]}
              />
            </ComponentSection>
          </div>

          <div className="-mx-8 bg-stone-50 dark:bg-stone-900">
            <ComponentSection id="download" title="6.20 Download Section" description="App download with store badges" fullWidth>
              <Download
                badge="Get Started"
                title="Download the app"
                subtitle="Available on all platforms. Start mapping your territory today."
                appStoreUrl="#"
                playStoreUrl="#"
                desktopUrl="#"
              />
            </ComponentSection>
          </div>

        </main>
      </div>
    </div>
    </ToastProvider>
  );
}

// Helper component for sections
function ComponentSection({ id, title, description, children, fullWidth }) {
  return (
    <section id={id} className={`mb-16 scroll-mt-24 ${fullWidth ? '' : ''}`}>
      <div className={fullWidth ? '' : 'mb-6'}>
        <h2 className={`text-xl font-bold text-stone-900 dark:text-stone-100 ${fullWidth ? 'px-8 pt-8' : ''}`}>
          {title}
        </h2>
        <p className={`text-stone-600 dark:text-stone-400 mt-1 ${fullWidth ? 'px-8 mb-4' : ''}`}>
          {description}
        </p>
      </div>
      {!fullWidth && (
        <div className="p-6 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800/50">
          {children}
        </div>
      )}
      {fullWidth && children}
    </section>
  );
}

// Demo components with state
function CheckboxDemo() {
  const [checked, setChecked] = useState(false);
  const [toggleOn, setToggleOn] = useState(false);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Checkbox label="Default checkbox" />
        <Checkbox label="Checked checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        <Checkbox label="With description" description="This checkbox has additional context" />
        <Checkbox label="Disabled" disabled />
      </div>
      <Divider />
      <div className="space-y-3">
        <Toggle label="Default toggle" checked={toggleOn} onChange={setToggleOn} />
        <Toggle label="Small toggle" size="sm" checked={false} onChange={() => {}} />
        <Toggle label="Large toggle" size="lg" checked={true} onChange={() => {}} />
        <Toggle label="Disabled" disabled checked={false} onChange={() => {}} />
      </div>
    </div>
  );
}

function RadioDemo() {
  const [value, setValue] = useState('option1');

  return (
    <Radio.Group
      name="demo"
      value={value}
      onChange={setValue}
      options={[
        { value: 'option1', label: 'Option 1', description: 'Description for option 1' },
        { value: 'option2', label: 'Option 2', description: 'Description for option 2' },
        { value: 'option3', label: 'Option 3', description: 'Description for option 3' },
      ]}
    />
  );
}

function ModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Content title="Example Modal" description="This is a modal dialog">
          <p className="text-stone-600 dark:text-stone-400">
            Modal content goes here. You can put forms, content, or any other components inside.
          </p>
          <Modal.Footer>
            <Modal.Close>
              <Button variant="outline">Cancel</Button>
            </Modal.Close>
            <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

function TabsDemo() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-stone-500 mb-3">Underline Style</p>
        <Tabs defaultValue="tab1">
          <Tabs.List variant="underline">
            <Tabs.Trigger value="tab1" variant="underline">Account</Tabs.Trigger>
            <Tabs.Trigger value="tab2" variant="underline">Settings</Tabs.Trigger>
            <Tabs.Trigger value="tab3" variant="underline">Billing</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Account settings content</Tabs.Content>
          <Tabs.Content value="tab2">Settings content</Tabs.Content>
          <Tabs.Content value="tab3">Billing content</Tabs.Content>
        </Tabs>
      </div>
      <div>
        <p className="text-sm text-stone-500 mb-3">Pills Style</p>
        <Tabs defaultValue="tab1">
          <Tabs.List variant="pills">
            <Tabs.Trigger value="tab1" variant="pills">Account</Tabs.Trigger>
            <Tabs.Trigger value="tab2" variant="pills">Settings</Tabs.Trigger>
            <Tabs.Trigger value="tab3" variant="pills">Billing</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Account settings content</Tabs.Content>
          <Tabs.Content value="tab2">Settings content</Tabs.Content>
          <Tabs.Content value="tab3">Billing content</Tabs.Content>
        </Tabs>
      </div>
    </div>
  );
}

function DropdownDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button variant="outline">
          Open Menu
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Label>Actions</Dropdown.Label>
        <Dropdown.Item shortcut="⌘E">Edit</Dropdown.Item>
        <Dropdown.Item shortcut="⌘D">Duplicate</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.CheckboxItem checked={checked} onCheckedChange={setChecked}>
          Show Preview
        </Dropdown.CheckboxItem>
        <Dropdown.Separator />
        <Dropdown.Item destructive>Delete</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}

function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" onClick={() => toast('This is a default toast')}>
        Default Toast
      </Button>
      <Button variant="outline" onClick={() => toast.success('Operation completed successfully!')}>
        Success Toast
      </Button>
      <Button variant="outline" onClick={() => toast.error('Something went wrong')}>
        Error Toast
      </Button>
      <Button variant="outline" onClick={() => toast.warning('Please review your input')}>
        Warning Toast
      </Button>
      <Button variant="outline" onClick={() => toast.info('Here is some information')}>
        Info Toast
      </Button>
      <Button variant="outline" onClick={() => toast.success('Saved!', {
        title: 'Changes Saved',
        action: { label: 'Undo', onClick: () => alert('Undone!') }
      })}>
        With Action
      </Button>
    </div>
  );
}

function DrawerDemo() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState('right');

  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" onClick={() => { setPosition('left'); setOpen(true); }}>
        Open Left
      </Button>
      <Button variant="outline" onClick={() => { setPosition('right'); setOpen(true); }}>
        Open Right
      </Button>
      <Button variant="outline" onClick={() => { setPosition('bottom'); setOpen(true); }}>
        Open Bottom
      </Button>

      <Drawer open={open} onClose={() => setOpen(false)} position={position}>
        <Drawer.Content>
          <Drawer.Header>Drawer Title</Drawer.Header>
          <Drawer.Body>
            <p className="text-stone-600 dark:text-stone-400">
              This is the drawer content. You can put forms, navigation, or any content here.
            </p>
            <div className="mt-4 space-y-3">
              <Input label="Name" placeholder="Enter name..." />
              <Input label="Email" placeholder="Enter email..." />
            </div>
          </Drawer.Body>
          <Drawer.Footer>
            <div className="flex gap-3 justify-end">
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary" onClick={() => setOpen(false)}>Save</Button>
            </div>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer>
    </div>
  );
}

function PaginationDemo() {
  const [page, setPage] = useState(5);
  return <Pagination currentPage={page} totalPages={20} onPageChange={setPage} />;
}

function SimplePaginationDemo() {
  const [page, setPage] = useState(3);
  return <Pagination.Simple currentPage={page} totalPages={10} onPageChange={setPage} />;
}
