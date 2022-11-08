<?php

namespace App\Services;

use Illuminate\Http\Request;

class ProductQuery
{
    protected $safeParms = [
        'name' => ['eq', 'like'],
        'category' => ['eq', 'like']
    ];

    protected $operatorMap = [
        'eq' => '=',
        'like' => 'LIKE'
    ];

    public function transform(Request $request)
    {
        $eloQuery = []; //array returned to controller
        foreach ($this->safeParms as $parm => $operators) {
            $query = $request->query($parm);
            if (!isset($query)) {
                continue;
            }
            foreach ($operators as $operator) {
                if (isset($query[$operator])) {
                    if ($operator == 'like') {
                        $eloQuery[] = [$parm, $this->operatorMap[$operator], '%' . $query[$operator] . '%'];
                    } else {
                        $eloQuery[] = [$parm, $this->operatorMap[$operator], $query[$operator]];
                    }
                }
            }
        }
        return $eloQuery;
    }
}
