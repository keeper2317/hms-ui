<div class="row">
    <div class="col-12">
        <div class="card card-default">
            <div class="card-body">
                <div class="table-responsive">
                    <table id="example2" class=" display" style="width:100%">
                        <thead>
                            <tr>
                                <th>Date Registered</th>
                                <th>Last name</th>
                                <th>First name</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {{-- @foreach ($patients as $patient)
                                <tr>
                                    <td>{{ $patient->created_at->format('m/d/Y') }}</td>
                                    <td>{{ $patient->last_name }}</td>
                                    <td>{{ $patient->first_name }}</td>
                                    <td><span class="badge badge-success">{{ $patient->patient_type }}</span></td>
                                    <td>
                                        <a href="javascript:void()" class="btn btn-square btn-primary mr-4"
                                            data-toggle="tooltip" type="button" data-placement="top" title="View"
                                            onclick="window.location='{{ route('patients.show', ['patient_id' => $patient->patient_id]) }}'">
                                            <i class="fa fa-eye color-muted"></i> </a>
                                        <a href="javascript:void()" class="btn btn-square btn-secondary mr-4"
                                            data-toggle="tooltip" type="button" data-placement="top" title="Edit"><i
                                                class="fa fa-pencil color-muted"></i> </a>
                                        <a href="javascript:void()" class="btn btn-square btn-danger"
                                            data-toggle="tooltip" type="button" data-placement="top" title="Close"><i
                                                class="fa fa-close color-danger"></i></a>
                                    </td>
                                </tr>
                            @endforeach --}}

                            <tr>
                                <td>2024/07/25</td>
                                <td>Winters</td>
                                <td>Garrett</td>
                                <td>Out-Patient</td>
                                <td><span class="badge badge-success">Active</span></td>
                                <td>
                                    <a href="{{ url('view') }}" class="btn btn-square btn-primary mr-4"
                                        data-toggle="tooltip" type="button" data-placement="top" title="View">
                                        <i class="fa fa-eye color-muted"></i> </a>
                                    <a href="{{ url('edit') }}" class="btn btn-square btn-secondary mr-4"
                                        data-toggle="tooltip" type="button" data-placement="top" title="Edit">
                                        <i class="fa fa-pencil color-muted"></i> </a>
                                    <a href="javascript:void()" class="btn btn-square btn-danger" data-toggle="tooltip"
                                        type="button" data-placement="top" title="Close">
                                        <i class="fa fa-close color-danger"></i></a>
                                </td>
                            </tr>

                            <tr>
                                <td>2024/01/12</td>
                                <td>Cox</td>
                                <td>Ashton</td>
                                <td>In-Patient</td>
                                <td><span class="badge badge-success">Active</span></td>
                                <td>
                                    <a href="{{ url('view') }}" class="btn btn-square btn-primary mr-4"
                                        data-toggle="tooltip" type="button" data-placement="top" title="View">
                                        <i class="fa fa-eye color-muted"></i> </a>
                                    <a href="{{ url('edit') }}" class="btn btn-square btn-secondary mr-4"
                                        data-toggle="tooltip" type="button" data-placement="top" title="Edit">
                                        <i class="fa fa-pencil color-muted"></i> </a>
                                    <a href="javascript:void()" class="btn btn-square btn-danger" data-toggle="tooltip"
                                        type="button" data-placement="top" title="Close">
                                        <i class="fa fa-close color-danger"></i></a>
                                </td>
                            </tr>

                            <tr>
                                <td>2024/03/29</td>
                                <td>Kelly</td>
                                <td>Cedric</td>
                                <td>In-Patient</td>
                                <td><span class="badge badge-success">Active</span></td>
                                <td>
                                    <a href="{{ url('view') }}" class="btn btn-square btn-primary mr-4"
                                        data-toggle="tooltip" type="button" data-placement="top" title="View">
                                        <i class="fa fa-eye color-muted"></i> </a>
                                    <a href="{{ url('edit') }}" class="btn btn-square btn-secondary mr-4"
                                        data-toggle="tooltip" type="button" data-placement="top" title="Edit">
                                        <i class="fa fa-pencil color-muted"></i> </a>
                                    <a href="javascript:void()" class="btn btn-square btn-danger" data-toggle="tooltip"
                                        type="button" data-placement="top" title="Close">
                                        <i class="fa fa-close color-danger"></i></a>
                                </td>
                            </tr>

                            <tr>
                                <td>2023/11/28</td>
                                <td>Satou</td>
                                <td>Airi</td>
                                <td>Out-Patient</td>
                                <td><span class="badge badge-success">Active</span></td>
                                <td>
                                    <a href="{{ url('view') }}" class="btn btn-square btn-primary mr-4"
                                        data-toggle="tooltip" type="button" data-placement="top" title="View">
                                        <i class="fa fa-eye color-muted"></i> </a>
                                    <a href="{{ url('edit') }}" class="btn btn-square btn-secondary mr-4"
                                        data-toggle="tooltip" type="button" data-placement="top" title="Edit">
                                        <i class="fa fa-pencil color-muted"></i> </a>
                                    <a href="javascript:void()" class="btn btn-square btn-danger"
                                        data-toggle="tooltip" type="button" data-placement="top" title="Close">
                                        <i class="fa fa-close color-danger"></i></a>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>2023/12/13</td>
                                <td>Frost</td>
                                <td>Sonya</td>
                                <td>In-Patient</td>
                                <td><span class="badge badge-success">Active</span></td>
                                <td>
                                    <a href="{{ url('view') }}" class="btn btn-square btn-primary mr-4"
                                        data-toggle="tooltip" type="button" data-placement="top" title="View">
                                        <i class="fa fa-eye color-muted"></i> </a>
                                    <a href="{{ url('edit') }}" class="btn btn-square btn-secondary mr-4"
                                        data-toggle="tooltip" type="button" data-placement="top" title="Edit">
                                        <i class="fa fa-pencil color-muted"></i> </a>
                                    <a href="javascript:void()" class="btn btn-square btn-danger"
                                        data-toggle="tooltip" type="button" data-placement="top" title="Close">
                                        <i class="fa fa-close color-danger"></i></a>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>