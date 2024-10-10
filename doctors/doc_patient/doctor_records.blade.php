@extends('doctors.doc_layout.index')

@section('doc_content')
<div class="content-body">
    <div class="container-fluid">
        <div class="row justify-content-center my-4">
            <div class="col-lg-12">
                <div class="row align-items-center ">
                    <div class="col">
                        <h2 class="h3 mb-0 page-title">{{ __('Patient Records') }}</h2>
                    </div>
                    <div class="col-auto">
                        <a type="button" class="btn btn-square btn-outline-primary btn-lg" 
                        href="register">{{ __('Register a Patient') }}</a>
                        {{-- @include('patient.register') --}}
                    </div>
                </div>
            </div>
        </div>
        <!-- row -->
        @include('doctors.doc_patient.doctor_table')
    </div>
</div>
@endsection