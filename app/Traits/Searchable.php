<?php
namespace App\Traits;

/**
 *
 */
trait Searchable
{
  public function scopeSearch($stmt, $search){
    if ($search) {
      $stmt->where(function ($q) use($search){
        $searches = $this->searches;
        foreach ($searches as $key => $column) {
          $q->when($key == 0, fn ($q) => $q->where($column, 'LIKE', '%'.$search.'%'))
          ->when($key > 0, fn ($q) => $q->orWhere($column, 'LIKE', '%'.$search.'%'));
        }
      });
    }
  }
}
