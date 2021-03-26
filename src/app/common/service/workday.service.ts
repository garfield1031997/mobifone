import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services/base.service';
@Injectable({
    providedIn: 'root',
})
export class WorkdayService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, 'company/daily-employee-shift');
    }

    listWorkdayMonth(Year, Month) {
        return this.http
            .get(`company/daily-employee-shift/report/username?year=${Year}&month=${Month}`)
            .pipe(map((res: any) => res.Payload));
    }

    listLeftEarlyMonth(Year, Month) {
        return this.http
            .get(`company/daily-employee-shift/late-early/username?year=${Year}&month=${Month}`)
            .pipe(map((res: any) => res.Payload));
    }
}
