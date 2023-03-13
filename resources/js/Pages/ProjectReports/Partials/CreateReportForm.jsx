import { useForm } from '@inertiajs/inertia-react';
import React, {useRef} from 'react';
import FormSection from '@/Components/FormSection';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';


export default function createReportForm({auth, project}) {
  const form = useForm({
    name: '',
    description: '',
    report_file: null,
  });

  const reportRef = useRef(null);
  
  function selectNewReport() {
    reportRef.current?.click();
  }

  function updateReportFile() {
    const report_file = reportRef.current?.files?.[0];

    if (!report_file) {
      return;
    }

    form.setData('report_file', report_file);
  }

  //Create a project controller
  function createReport() {
    form.post(route('reports.store', [project = project]), {
      errorBag: 'createReport',
      preserveScroll: true,
    });
  }

  const onHandleChange = (event) => {
    form.setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

  return (
    <FormSection
      onSubmit={createReport}
      title={'Report Details'}
      description={'Submit a new report for the project.'}
      renderActions={() => (
        <>
          <PrimaryButton
            className='opacity-25'
          >
            Save
          </PrimaryButton>
        </>
      )}
    >

      <div className="col-span-6 sm:col-span-4">
        <InputLabel htmlFor="name" value="Project Report Name" />
        <TextInput
          type="text"
          name="name"
          value={form.data.name}
          className="mt-1 block w-full"
          autoComplete="name"
          isFocused={true}
          handleChange={onHandleChange}
          required
        />
        <InputError message={form.errors.name} className="mt-2" />
      </div>
      
      <div className="col-span-6 sm:col-span-4">
        <InputLabel htmlFor="description" value="Project Report Description" />
        <TextInput
          type="text"
          name="description"
          value={form.data.description}
          className="mt-1 block w-full"
          handleChange={onHandleChange}
          required
        />
        <InputError message={form.errors.description} className="mt-2" />
      </div>
      
      <div className="col-span-6 sm:col-span-4">
        <InputLabel htmlFor="report_file" value="Project Report File" />
        <input
          type="file"
          className="hidden"
          ref={reportRef}
          onChange={updateReportFile}
        />

        <SecondaryButton
            className="mt-2 mr-2"
            onClick={selectNewReport}
          >
            Upload A New Report(pdf)
          </SecondaryButton>
        <InputError message={form.errors.report_file} className="mt-2" />
      </div>

      <PrimaryButton
            className='opacity-25'
          >
            Save
          </PrimaryButton>
    </FormSection>
  );
}