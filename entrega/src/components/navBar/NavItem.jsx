import React from 'react'

function NavItem(props) {
  return (
    <div>
        <li class="nav-item item-action m-2">
            <a class="nav-link text-dark fw-bold bg-light bg-gradient rounded  p-3 " aria-current="page" href="#">{props.title}</a>
        </li>
    </div>
  )
}

export default NavItem